import React from "react";

import { Canvas } from "./shared/Canvas";
import { ATag } from "./shared/ATag";

import { Octocat } from "./svgs/Octocat";
import { User } from "../types";

interface Props {
  text: string;
  user: User;
}

const BecameSponsor: React.FC<Props> = ({ text, user }) => {
  const info = text.split("$1");

  return (
    <Canvas>
      <Octocat scale={1.5} />

      <p style={{ paddingLeft: "10px" }}>
        {info[0]}
        <b>
          <ATag text={`@${user.login}`} url={user.url} />
        </b>
        {info[1]}
      </p>
    </Canvas>
  );
};

export { Props, BecameSponsor };
