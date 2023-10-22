import React from "react";
import { randomInt } from "crypto";

import { Link, Canvas } from "./shared";
import { Octocat as OctocatSVG } from "./svgs";
import { User, Goal } from "../types";
import { SponsorshipBar } from "./SponsorshipBar";

const texts = [
  "$1's invaluable support is deeply appreciated. Your sponsorship propels my open-source journey and makes a significant impact.",
  "A heartfelt shoutout to $1 for consistent backing, a driving force in my open-source work.",
  "Gratitude to $1 for sponsoring my open-source work and making a real difference.",
  "$1's remarkable commitment to my open-source journey is truly humbling; the sponsorship matters immensely.",
  "Thanks to $1 for believing in my open-source work, providing inspiration through the sponsorship.",
  "Deep appreciation to $1 for unmatched generosity, empowering my positive impact in open-source.",
  "Warm thanks to $1 for unwavering commitment, a crucial source of encouragement for my open-source goals.",
  "$1's kindness and support of my open-source work is profoundly humbling and motivating.",
  "Honored to count $1 as a critical sponsor, this support fuels my open-source journey.",
  "$1's exceptional support drives my open-source work, propelling me to achieve more.",
  "A huge thanks to $1 for endorsing and believing in my open-source contributions.",
  "Appreciating $1 for unwavering support, fueling my progress in open-source efforts.",
  "With gratitude to $1, whose sponsorship has been pivotal in my open-source journey.",
  "Thanks to $1 for empowering my work in the open-source community through the sponsorship.",
  "A heartfelt thank you to $1 for steadfast commitment and backing in my open-source pursuits.",
  "Extending gratitude to $1 for sponsorship, a pivotal force behind my strides in open-source.",
  "Deep gratitude to $1 for generosity, enabling me to contribute positively to open-source projects.",
  "Appreciating $1 for consistent support, playing a crucial role in my open-source work.",
  "I'm truly thankful to $1 for sponsorship, driving me to make a positive impact in open-source.",
  "Expressing gratitude to $1 for believing in my open-source contributions and supporting me wholeheartedly.",
  "With appreciation to $1 for backing, helping me thrive in the realm of open-source.",
  "$1's support has been pivotal in my open-source journey, and I'm grateful.",
  "Deeply honored to have $1 as a sponsor, belief in my open-source work speaks volumes.",
  "Gratitude to $1 for unwavering commitment to my open-source endeavors.",
  "Thanks to $1 for sponsorship, enabling my continued progress in the open-source world.",
  "Heartfelt thanks to $1 for unwavering support throughout my open-source journey.",
  "Thank you, $1, for sponsorship, providing the means for me to excel in open-source.",
  "Sincerely grateful to $1 for generosity and support for my open-source work.",
  "Extending gratitude to $1 for sponsorship, fueling my passion for open-source.",
  "Appreciating $1 for instrumental support, enhancing my contributions to open-source.",
  "Thankful for $1's sponsorship, a driving force behind my accomplishments in open-source.",
  "With deep gratitude, I acknowledge $1 for unwavering assistance in my open-source journey.",
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
