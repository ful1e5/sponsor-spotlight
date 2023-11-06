import { VercelRequest, VercelResponse } from "@vercel/node";

import { SponsorsAPI } from "../github/SponsorsAPI";
import { Goal, User } from "../types";

type ResponseData = {
  sponsors: User[];
  others?: number;
  goals?: Goal | null;
  is_sponsor?: boolean;
};

export default async function (req: VercelRequest, res: VercelResponse) {
  let login = "";
  let getGoals = false;
  let getSingle = false;

  if (req.query.login) login = `${req.query.login}`;
  if (req.query.goals) getGoals = true;
  if (req.query.single) getSingle = true;

  const api = new SponsorsAPI("ful1e5");

  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    let sponsors = await api.getActiveSponsors();
    sponsors = sponsors.sort(() => Math.random() - 0.5);
    const me = await api.getMe();

    const data: ResponseData = {
      sponsors: getSingle ? [sponsors[0]] : sponsors,
    };

    if (getSingle) {
      data.others = sponsors.length - 1;
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
