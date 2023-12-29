import { VercelRequest, VercelResponse } from "@vercel/node";

import { SponsorsAPI } from "../github/SponsorsAPI";
import { Goal, User } from "../types";

type ResponseData = {
  sponsors: User[];
  others?: number;
  total_dollar?: number;
  goals?: Goal | null;
  is_sponsor?: boolean;
};

const tierList = [
  "basic",
  "standard",
  "professional",
  "premium",
  "elite",
  "diamond",
];

export default async function (req: VercelRequest, res: VercelResponse) {
  let login = "";
  let tier = "";
  let getGoals = false;
  let includeMaxTiers = false;
  let getSingle = false;

  if (req.query.login) login = `${req.query.login}`;

  if (req.query.tier) {
    tier = `${req.query.tier}`.toLowerCase() as User["tier"];
    if (tier && !tierList.includes(tier)) {
      return res.json({
        error: `Inavalid value '${tier}' for query 'tier'`,
        data: [],
      });
    }
  }

  if (req.query.goals) getGoals = true;
  if (req.query.inlcude_max_tiers) includeMaxTiers = true;
  if (req.query.single) getSingle = true;

  const api = new SponsorsAPI("ful1e5");

  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    let sponsors = await api.getActiveSponsors({ monthly: true });
    sponsors = sponsors.sort(() => Math.random() - 0.5);

    if (tier && api.tiers[tier]) {
      let list = [tier];
      if (includeMaxTiers) {
        list = tierList.slice(tierList.indexOf(tier)).filter(Boolean);
      }
      sponsors = sponsors.filter((sponsor) => list.includes(sponsor.tier));
    }

    const me = await api.getMe();

    const data: ResponseData = {
      sponsors: getSingle ? [sponsors[0]] : sponsors,
    };

    if (getSingle) {
      data.others = sponsors.length - 1;
      data.total_dollar = me.total_dollar;
    }

    let IsSponsor = false;
    if (login) {
      if (login === me.login) {
        IsSponsor = true;
      } else {
        const unames = sponsors.map((s) => s.login);
        IsSponsor = unames.includes(login);
      }
      data.is_sponsor = IsSponsor;
    }

    if (getGoals) {
      const goals = await api.getSponsorshipGoal();
      data.goals = goals;
    }

    return res.json(data);
  } else {
    return res.json({
      data: [],
    });
  }
}
