import got from "got";

interface Sponsor {
  login: string;
  name: string;
  url: string;
}

export class GHSponsorsAPI {
  constructor(private uname: string) {}

  private request = async (query: string) => {
    return await got.post("https://api.github.com/graphql", {
      headers: {
        Authorization: `Bearer ${process.env.GH_AUTH_TOKEN}`,
      },
      json: {
        query: query,
      },
    });
  };

  public hasSponsorsListing = async (): Promise<Boolean> => {
    const res = await this.request(`query {
      user(login: "${this.uname}") {
        hasSponsorsListing
      }
    }`);
    const body = JSON.parse(res.body);
    if (body.data?.user?.hasSponsorsListing) {
      return true;
    } else {
      return false;
    }
  };

  public getCurrentSponsors = async (): Promise<Sponsor[]> => {
    const sponsors: Sponsor[] = [];

    let after = "";
    let hasNextPage = true;

    while (hasNextPage) {
      const res = await this.request(`query {
        user(login: "${this.uname}") {
          ... on Sponsorable {
            sponsors(first: 100 ${after}) {
              pageInfo {
                hasNextPage
                endCursor
              }
              nodes {
                ... on User {
                  login
                  name
                  url
                }
                ... on Organization {
                  login
                  name
                  url
                }
              }
            }
          }
        }
      }`);

      const body = JSON.parse(res.body);
      if (body.data.user.sponsors) {
        const data = body.data.user.sponsors;

        hasNextPage = data.pageInfo.hasNextPage;
        after = `, after:"${data.pageInfo.endCursor}"`;

        sponsors.push(...(data.nodes as Sponsor[]));
      }
    }

    return sponsors;
  };
}
