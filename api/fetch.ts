import { VercelRequest, VercelResponse } from "@vercel/node";

import { SponsorsAPI } from "../github/SponsorsAPI";

export default async function (_req: VercelRequest, res: VercelResponse) {
  const api = new SponsorsAPI("ful1e5");

  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    const sponsors = await api.getActiveSponsors();
    const goals = await api.getSponsorshipGoal();
    const me = await api.getMe();
    sponsors.push(me);

    return res.json({ sponsors, goals });
  } else {
    return res.json({
      data: [],
    });
  }
}
