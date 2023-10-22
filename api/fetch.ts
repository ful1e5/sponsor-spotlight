import { VercelRequest, VercelResponse } from "@vercel/node";

import { SponsorsAPI } from "../github/SponsorsAPI";
import { Goal, User } from "../types";

type ResponseData = {
  sponsors: User[];
  goals?: Goal | null;
  is_sponsor?: boolean;
};

export default async function (req: VercelRequest, res: VercelResponse) {
  let login = "";
  let getGoals = false;

  if (req.query.login) {
    login = `${req.query.login}`;
  }

  if (req.query.goals) {
    getGoals = true;
  }

  const api = new SponsorsAPI("ful1e5");

  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    const sponsors = await api.getActiveSponsors();
    const me = await api.getMe();
    sponsors.push(me);

    const data: ResponseData = { sponsors };

    let IsSponsor = false;
    if (login) {
      const unames = sponsors.map((s) => s.login);
      IsSponsor = unames.includes(login);
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
