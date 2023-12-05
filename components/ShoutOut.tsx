import React from "react";
import { randomInt } from "crypto";

import { Link, Canvas } from "./shared";
import { Octocat as OctocatSVG } from "./svgs";
import { User, Goal } from "../types";
import { SponsorshipBar } from "./SponsorshipBar";

const texts = [
  "This project's development is graciously sponsored by the generous support of $1. Their contributions make it possible for me to continue creating valuable resources for the community.",
  "A huge shoutout to $1 for their unwavering support of this project. Their sponsorship enables me to dedicate my time and efforts to bringing this project to life.",
  "I'm incredibly grateful for the sponsorship of $1, which empowers me to pursue my passion for creating meaningful projects that benefit everyone.",
  "The development of this project is proudly supported by $1, whose generosity allows me to share my knowledge and skills with the world.",
  "Thanks to the sponsorship of $1, this project is available to everyone, fostering collaboration and innovation within the community.",
  "With the backing of $1, I'm able to continue developing this project, making it even more useful and impactful for all users.",
  "The ongoing support of $1 is instrumental in enabling me to maintain and improve this project, ensuring its continued value to the community.",
  "$1's sponsorship is a driving force behind this project's success, allowing me to focus on creating exceptional features and enhancements.",
  "I'm deeply appreciative of $1's sponsorship, which makes it possible for me to dedicate my time and resources to this project without financial constraints.",
  "The generosity of $1 has played a crucial role in the development of this project, making it a valuable resource for everyone.",
  "This project is proudly supported by $1, whose belief in my work has fueled its growth and success.",
  "With the support of $1, I'm able to continuously refine and enhance this project, ensuring it remains relevant and valuable to the community.",
  "The development of this project is made possible by the generous sponsorship of $1, whose contributions are essential to its ongoing success.",
  "$1's unwavering support has been instrumental in bringing this project to life, and I'm incredibly grateful for their generosity.",
  "Thanks to the sponsorship of $1, this project is freely available to everyone, fostering a collaborative environment for learning and growth.",
  "I'm deeply appreciative of $1's belief in my work, which has allowed me to pursue my passion for creating meaningful projects.",
  "This project's development is proudly supported by $1, whose contributions make it accessible to a wider audience.",
  "With the backing of $1, I'm able to continuously improve this project, ensuring it meets the evolving needs of the community.",
  "The ongoing support of $1 is invaluable to me, as it allows me to focus on creating exceptional experiences without financial worries.",
  "$1's sponsorship has been a driving force behind this project's success, making it a valuable resource for individuals and organizations alike.",
  "I am deeply grateful for $1's unwavering support, which has been instrumental in the success of this project.",
  "I am incredibly fortunate to have $1 as a sponsor, as their contributions have been essential to the project's growth and success.",
  "The development of this project is gratefully supported by $1, whose generosity makes it possible for me to share my work with the world.",
  "I'm incredibly thankful for the ongoing support of $1, which allows me to continue developing and improving this project.",
  "This project is proudly supported by $1, whose belief in the power of technology has fueled its development.",
  "With the backing of $1, I'm able to continuously innovate and enhance this project, ensuring it remains at the forefront of its field.",
  "The ongoing support of $1 is instrumental in enabling me to maintain and expand this project, making it even more useful and impactful for all users.",
  "With the help of $1, I can keep adding cool features to this project. Stay tuned for more!",
  "I'm so grateful for $1's ongoing support. It means I can keep working on this project full-time.",
];

interface Props {
  user: { login: string; url: string };
  sponsor: User;
  goal: Goal | null;
}

const ShoutOut: React.FC<Props> = ({ sponsor, user, goal }) => {
  const info = texts[randomInt(texts.length)].split("$1");

  return (
    <Canvas
      backgroundColor="linear-gradient(92.17deg, #140326 15.43%, #270542 72.53%)"
      borderColor="#B252FF"
      foregroundColor="#FFFFFF"
    >
      <OctocatSVG />

      <div
        style={{
          display: "flex",
          textAlign: "left",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div style={{ paddingTop: 10 }}>
          <p>
            {info[0]}
            <b>
              <Link text={`@${sponsor.login}`} url={sponsor.url} />
            </b>
            {info[1]}
          </p>
        </div>

        <div style={{ paddingTop: 10 }}>
          <SponsorshipBar goal={goal} />
        </div>

        <div style={{ textAlign: "right" }}>
          <p style={{ padding: "0px 20px 0px 0px" }}>
            &mdash;
            <b>
              <Link text={`@${user.login}`} url={user.url} />
            </b>
          </p>
        </div>
      </div>
    </Canvas>
  );
};

export { ShoutOut };
