import React from "react";
import { randomInt } from "crypto";

import { ATag, Canvas } from "./shared";
import { Octocat } from "./svgs";
import { User } from "../types";

const texts = [
  "Thank you $1 for your invaluable support! Your sponsorship drives my open-source journey and makes a huge difference.",
  "Heartfelt thanks to $1 for unwavering support, a driving force in my open-source work.",
  "Grateful to $1 for sponsoring my open-source work, making a significant impact.",
  "Humbled by $1's remarkable commitment to my open-source journey, your sponsorship truly matters.",
  "Thanks to $1 for believing in my open-source work and providing inspiration through your sponsorship.",
  "Deep appreciation to $1 for unparalleled generosity, enabling my positive impact in open-source.",
  "Sincere thanks to $1's unwavering commitment, a vital source of encouragement for my goals in open-source.",
  "$1's kindness and generosity in sponsoring my open-source work is deeply humbling and motivating.",
  "Honored to have $1 as a critical sponsor, your support fuels my open-source journey.",
  "Exceptional support from $1 fuels my open-source work, propelling me to achieve more.",
  "Incredibly grateful to $1 for sponsoring and believing in my open-source contributions.",
  "Appreciating $1 for their unwavering support, driving my open-source efforts forward.",
  "With gratitude to $1, whose sponsorship has been a crucial part of my open-source journey.",
  "Thankful to $1 for their sponsorship, which has empowered my work in the open-source community.",
  "A big thank you to $1 for their unwavering commitment and support in my open-source endeavors.",
  "Extending my thanks to $1 for their sponsorship, a vital force behind my open-source progress.",
  "Deeply grateful to $1 for their generosity, enabling me to contribute positively to open-source projects.",
  "Thanking $1 for their continuous support, which has played a significant role in my open-source work.",
  "Sincerely appreciative of $1 for their sponsorship, driving me to make a meaningful difference in open-source.",
  "Expressing my thanks to $1 for believing in my open-source contributions and supporting me wholeheartedly.",
  "With appreciation to $1 for their sponsorship, helping me thrive in the world of open-source.",
  "Thank you $1 for your invaluable support, which has been pivotal in my open-source journey.",
  "Deeply honored to have $1 as a sponsor, your belief in my open-source work means a lot.",
  "Grateful to $1 for their unwavering commitment to my open-source endeavors.",
  "Thanks to $1 for their sponsorship, enabling me to continue making strides in the open-source world.",
  "With heartfelt appreciation, I thank $1 for their unwavering support in my open-source journey.",
  "Thank you $1 for your sponsorship, which has provided me with the means to excel in open-source.",
  "Sincerely grateful to $1 for their generosity and belief in my open-source work.",
  "Extending my thanks to $1 for their sponsorship that drives my passion for open-source.",
  "Appreciating $1 for their support, which has been instrumental in my open-source contributions.",
  "Thankful to $1 for their sponsorship, a driving force behind my achievements in open-source.",
  "With deep gratitude, I acknowledge $1 for their continuous support in my open-source journey.",
];

interface Props {
  user: User;
  sponsor: User;
}

const ShoutOut: React.FC<Props> = ({ sponsor, user }) => {
  const info = texts[randomInt(texts.length)].split("$1");

  return (
    <Canvas
      backgroundColor="linear-gradient(92.17deg, #140326 15.43%, #270542 72.53%)"
      borderColor="#B252FF"
      foregroundColor="#FFFFFF"
    >
      <Octocat />
      <div style={{ display: "flex" }}>
        <p>
          {info[0]}
          <b>
            <ATag text={`@${sponsor.login}`} url={sponsor.url} />
          </b>
          {info[1]}
          <div style={{ alignSelf: "flex-end", padding: "2px 10px 0px 0px" }}>
            <p dir="rtl">
              <b>
                <ATag text={`${user.login}@`} url={user.url} />
              </b>
              &mdash;
            </p>
          </div>
        </p>
      </div>
    </Canvas>
  );
};

export { ShoutOut };
