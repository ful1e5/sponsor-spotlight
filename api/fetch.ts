import { VercelRequest, VercelResponse } from "@vercel/node";

import { SponsorsAPI } from "../github/SponsorsAPI";

export default async function (req: VercelRequest, res: VercelResponse) {
  if (!req.query.login) {
    return res.status(404).json({ error: `"login" query not found` });
  }

  const login = `${req.query.login}`;
  const api = new SponsorsAPI(login);

  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    const sponsors = await api.getActiveSponsors();

    console.log();
    return res.json({
      data: sponsors,
    });
  } else {
    return res.json({
      data: [],
    });
  }
}
