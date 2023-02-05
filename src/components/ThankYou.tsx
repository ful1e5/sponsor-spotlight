import React from "react";

import { Canvas } from "./shared/Canvas";
import { ATag } from "./shared/ATag";

import { Octocat } from "./svgs/Octocat";
import { User } from "../types";

interface Props {
  user: User;
  sponsor: User;
  text: string;
}

const ThankYou: React.FC<Props> = ({ sponsor, text, user }) => {
  const info = text.split("$1");

  return (
    <Canvas>
      <Octocat scale={1.5} />

      <p style={{ paddingLeft: "10px" }}>
        {info[0]}
        <b>
          <ATag text={`@${sponsor.login}`} url={sponsor.url} />
        </b>
        {info[1]}

        <p
          dir="rtl"
          style={{
            paddingRight: "40px",
            fontSize: "15px",
          }}
        >
          <b>
            <ATag text={`${user.login}@`} url={user.url} />
          </b>
          &mdash;
        </p>
      </p>
    </Canvas>
  );
};

export { Props, ThankYou };
