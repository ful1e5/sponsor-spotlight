import { randomInt } from "crypto";
import { renderToString } from "react-dom/server";
import { VercelRequest, VercelResponse } from "@vercel/node";

import { GHSponsorsAPI } from "../utils/ghSponsorsAPI";
import { randomThanksText, randomBecameSponsorText } from "../utils/texts";

import { ThankYou } from "../components/ThankYou";
import { BecameSponsor } from "../components/BecameSponsor";

import { User } from "../types";

const getluckySponsor = async (
  login: string
): Promise<User | undefined | null> => {
  const api = new GHSponsorsAPI(login);
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

function haveShoutOutMood(probability: number = 0.4): boolean {
  return Math.random() < probability;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!req.query.login) {
    return res.status(404).json({ error: `"login" query not found` });
  }
  const login = `${req.query.login}`;
  const sponsor = await getluckySponsor(login);

  if (sponsor === undefined) {
    return res.status(404).json({ error: "Github Sponsor Listing Not Found" });
  }

  let component: React.ReactElement<any, any> | null;
  const user = {
    login,
    url: `https://github.com/sponsors/${login}`,
  };

  component = BecameSponsor({
    text: randomBecameSponsorText(),
    user,
  });

  if (sponsor && haveShoutOutMood()) {
    component = ThankYou({
      text: randomThanksText(),
      user,
      sponsor,
    });
  }

  if (component) {
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

    const text = renderToString(component);
    return res.status(200).send(text);
  }
}
