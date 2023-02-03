import dotenv from "dotenv";
dotenv.config();

import { GHSponsorsAPI } from "./api/ghSponsor";

const main = async () => {
  const api = new GHSponsorsAPI("ful1e5");
  const hasSponsorsListing = await api.hasSponsorsListing();

  if (hasSponsorsListing) {
    const sponsors = await api.getCurrentSponsors();

    if (sponsors.length == 0) {
      console.log("0 Sponsors");
    } else {
      console.log(sponsors?.length);
    }
  } else {
    console.error("Listing Not Found");
  }
};

main();
