import got from "got";
import { User, Goal } from "../types";

class SponsorsAPI {
  constructor(private login: string) {}

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
      user(login: "${this.login}") {
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

  public getActiveSponsors = async (): Promise<User[]> => {
    const sponsors: User[] = [];

    let after = "";
    let hasNextPage = true;

    while (hasNextPage) {
      const res = await this.request(`query {
        user(login: "${this.login}") {
          ... on Sponsorable {
            sponsors(first: 100 ${after}) {
              pageInfo {
                hasNextPage
                endCursor
              }
              nodes {
                ... on User {
                  login
                  url
                }
                ... on Organization {
                  login
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

        sponsors.push(...(data.nodes as User[]));
      }
    }

    return sponsors;
  };

  public getSponsorshipGoal = async () => {
    let goal: Goal | null = null;
    const res = await this.request(`query {
        user(login: "${this.login}") {
          sponsorsListing {
            activeGoal {
              percentComplete
              title
            }
          }
        }
      }`);

    const body = JSON.parse(res.body);
    if (body.data.user.sponsorsListing) {
      const data = body.data.user.sponsorsListing.activeGoal;
      if (data) {
        goal = {
          percentComplete: data.percentComplete,
          title: data.title,
        };
      }
    }

    return goal;
  };
}

export { SponsorsAPI };
