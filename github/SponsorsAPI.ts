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
                  name
                  avatarUrl
                }
                ... on Organization {
                  login
                  url
                  name
                  avatarUrl
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
          sponsorshipsAsMaintainer {
            totalRecurringMonthlyPriceInCents
          }
          sponsorsListing {
            activeGoal {
              targetValue
              percentComplete
              title
            }
          }
        }
      }`);

    const body = JSON.parse(res.body);
    if (body.data.user.sponsorsListing) {
      const activeGoal = body.data.user.sponsorsListing.activeGoal;
      const sponsorshipsAsMaintainer = body.data.user.sponsorshipsAsMaintainer;
      if (activeGoal) {
        goal = {
          monthlySponsorshipInCents:
            sponsorshipsAsMaintainer.totalRecurringMonthlyPriceInCents,
          percentComplete: activeGoal.percentComplete,
          title: activeGoal.title,
          targetValueInDollar: activeGoal.targetValue,
        };
      }
    }

    return goal;
  };

  public getMe = async (): Promise<User> => {
    const res = await this.request(`query {
      user(login: "${this.login}") {
        login
        url
        name
        avatarUrl
      }
    }`);

    const user = JSON.parse(res.body);
    return user.data.user as User;
  };
}

export { SponsorsAPI };
