import got from "got";
import { User, Goal, Me, SponsorshipTiers } from "../types";

class SponsorsAPI {
  public tiers: SponsorshipTiers = {
    basic: 100,
    standard: 500,
    professional: 10000,
    premium: 25000,
    elite: 50000,
    diamond: 100000,
  };

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

  private getTier = (value: number) => {
    const tierKey = Object.keys(this.tiers).find(
      (key) => this.tiers[key] === value,
    );
    return tierKey ? (tierKey as User["tier"]) : undefined;
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

  public getActiveSponsors = async (opts?: {
    monthly?: boolean;
  }): Promise<User[]> => {
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
                  sponsorshipsAsSponsor {
                    totalRecurringMonthlyPriceInCents
                  }
                }
                ... on Organization {
                  login
                  url
                  name
                  avatarUrl
                  sponsorshipsAsSponsor {
                    totalRecurringMonthlyPriceInCents
                  }
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

        const nodes: any[] = data.nodes;
        nodes.forEach((e) => {
          const cents =
            e.sponsorshipsAsSponsor.totalRecurringMonthlyPriceInCents;
          const user: User = {
            login: e.login,
            url: e.url,
            name: e.name,
            avatarUrl: e.avatarUrl,
            dollar: cents / 100,
            tier: this.getTier(cents) || "Unknown",
          };

          if (opts?.monthly) {
            if (user.dollar > 0) {
              sponsors.push(user);
            }
          } else {
            sponsors.push(user);
          }
        });
      }
    }

    return sponsors;
  };

  public getSponsorshipGoal = async () => {
    let goal: Goal | null = null;
    const res = await this.request(`query {
        user(login: "${this.login}") {
          sponsorshipsAsMaintainer(includePrivate: true) {
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

    const {
      data: { user },
    } = JSON.parse(res.body);
    if (user.sponsorsListing) {
      const activeGoal = user.sponsorsListing.activeGoal;
      const sponsorshipsAsMaintainer = user.sponsorshipsAsMaintainer;
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

  public getMe = async () => {
    const res = await this.request(`query {
      user(login: "${this.login}") {
        sponsorshipsAsMaintainer {
          totalRecurringMonthlyPriceInCents
        }
        login
        url
        name
        avatarUrl
      }
    }`);

    const {
      data: { user },
    } = JSON.parse(res.body);

    const me: Me = {
      login: user.login,
      url: user.login,
      name: user.name,
      avatarUrl: user.avatarUrl,
      total_dollar:
        user.sponsorshipsAsMaintainer.totalRecurringMonthlyPriceInCents / 100,
    };

    return me;
  };
}

export { SponsorsAPI };
