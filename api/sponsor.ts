import { HTTPError } from "got/dist/source";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { randomInt } from "crypto";
import { renderToString } from "react-dom/server";

import { SponsorsAPI } from "../github/SponsorsAPI";
import { NotFound, Request, ShoutOut } from "../components";

import { User } from "../types";

const getluckySponsor = async (
  login: string
): Promise<User | undefined | null> => {
  const api = new SponsorsAPI(login);

  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    const sponsors = await api.getCurrentSponsors();

    if (sponsors.length == 0) {
      return null;
    } else if (sponsors.length == 1) {
      return sponsors[0];
    } else {
      const i = randomInt(sponsors.length);
      return sponsors[i];
    }
  } else {
    return;
  }
};

function haveShoutOutMood(probability: number = 0.7): boolean {
  return Math.random() < probability;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!req.query.login) {
    return res.status(404).json({ error: `"login" query not found` });
  }

  const login = `${req.query.login}`;
  let sponsor: User | null | undefined;

  try {
    sponsor = await getluckySponsor(login);
  } catch (e) {
    const error = (e as HTTPError).response;
    return res.status(error.statusCode).json(error.body);
  }

  let component: React.ReactElement<any, any> | null;
  const user = { login, url: `https://github.com/sponsors/${login}` };
  component = Request({ user });

  if (sponsor === undefined) {
    component = NotFound({ user });
  } else if (sponsor && haveShoutOutMood()) {
    component = ShoutOut({ user, sponsor });
  }

  if (component) {
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

    const text = renderToString(component);
    return res.status(200).send(text);
  } else {
    return res.status(500).json({
      error: "An error occurred while generating the React component.",
      action: "Please create an issue",
      visit: "https://github.com/ful1e5/sponsor-spotlight/issues",
    });
  }
}
