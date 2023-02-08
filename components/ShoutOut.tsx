import React from "react";
import { randomInt } from "crypto";

import { ATag, Canvas } from "./shared";
import { Octocat } from "./svgs";
import { User } from "../types";

const texts: string[] = [
  "Thank you $1 for your unwavering support! Your sponsorship has been a driving force for me, and it will make a huge difference in my opensource journey.",
  "With deep appreciation, I extend my heartfelt thanks to $1 for their unwavering support. Their sponsorship has been a significant driving force in my opensource work and will make a significant difference in my journey.",
  "I am sincerely grateful to $1 for their generosity in sponsoring my opensource work. Their support has been crucial and has helped me to continue my journey in this field.",
  "The unwavering commitment shown by $1 towards my opensource work is truly remarkable. Their sponsorship has made a considerable impact, and I am honored to have them as a sponsor.",
  "I am indebted to $1 for their support and belief in my opensource work. Their sponsorship has been a source of inspiration and motivation, and I am grateful for their generosity.",
  "The generosity shown by $1 in sponsoring my opensource work is unparalleled. Their support has been instrumental in allowing me to continue my journey in this field and make a positive impact.",
  "I am deeply appreciative of $1 for their unwavering commitment to my opensource journey. Their sponsorship has provided me with the resources and encouragement necessary to achieve my goals.",
  "The kindness and generosity shown by $1 in sponsoring my opensource work is deeply humbling. Their support has been a driving force in allowing me to continue my work and make a meaningful impact.",
  "I am honored to have $1 as a sponsor and extend my sincerest thanks for their support. Their sponsorship has been a critical factor in my opensource journey and has had a positive impact on my work.",
  "The support shown by $1 in sponsoring my opensource work is truly exceptional. Their generosity has provided me with the resources and motivation necessary to continue my journey and achieve my goals.",
  "I am incredibly grateful to $1 for their sponsorship and belief in my opensource work. Their unwavering support has been a source of inspiration and has helped me to make a positive impact in this field.",
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
