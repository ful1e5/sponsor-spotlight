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

    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    );
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
