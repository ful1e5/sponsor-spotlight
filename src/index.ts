import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  console.log({ token: process.env.GH_AUTH_TOKEN });
};

main();
