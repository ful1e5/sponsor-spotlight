import React from "react";
import { randomInt } from "crypto";

import { Link, Canvas } from "./shared";
import { Octocat } from "./svgs";
import { User } from "../types";

const texts: string[] = [
  "Are you a supporter of open-source projects? Help me reach my goals by supporting my work at $1. Your contribution will not only be acknowledged in every project I undertake but will also keep my passion for open-source alive.",
  "Join the open-source community and show your support for my work at $1. With your help, I can continue to contribute to the open-source world and give back to the tech community. Your support is much appreciated!",
  "Get a chance to be recognized for your support of open-source projects. By supporting me at $1, you can help me achieve my goals and receive a shoutout in every open-source project I undertake. Thanks for considering!",
  "Contribute to the open-source community and support my work at $1. Your support will not only help me reach my goals but will also give me the motivation to keep creating and sharing quality open-source projects.",
  "Join the movement and support my work at $1. Your support will be a great help in achieving my goals and will be acknowledged in every open-source project I undertake. Thank you for considering my request.",
  "If you believe in the power of open-source, support my work at $1. Your contribution will make a difference in my life and will help me continue to contribute to the open-source world. Thank you for your support.",
  "Take a step forward and support my work at $1. Your support will not only help me reach my goals but will also give me the opportunity to give back to the open-source community. Thank you for considering my request.",
  "Get a chance to make a difference in the open-source world by supporting my work at $1. Your support will help me reach my goals and will be acknowledged in every project I undertake. Thank you for your support.",
  "Join the open-source community and support my work at $1. With your help, I can continue to create quality open-source projects and make a difference in the tech world. Your support is much appreciated!",
  "Make a difference in the open-source community by supporting my work at $1. Your support will help me reach my goals and will be acknowledged in every open-source project I undertake. Thank you for considering my request.",
];

interface Props {
  user: User;
}

const Request: React.FC<Props> = ({ user }) => {
  const info = texts[randomInt(texts.length)].split("$1");

  return (
    <Canvas
      backgroundColor="linear-gradient(92.17deg, #2F0101 15.43%, #670303 72.53%)"
      borderColor="#FF6767"
      foregroundColor="#FFFFFF"
    >
      <Octocat />
      <p style={{ marginTop: "-5px" }}>
        {info[0]}
        <b>
          <Link text={`@${user.login}`} url={user.url} />
        </b>
        {info[1]}
      </p>
    </Canvas>
  );
};

export { Request };
