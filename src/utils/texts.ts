import { randomInt } from "crypto";

const thanks: string[] = [
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

const zero: string[] = [
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

const randomBecameSponsorText = (): string => {
  const i = randomInt(zero.length);
  return zero[i];
};

const randomThanksText = (): string => {
  const i = randomInt(thanks.length);
  return thanks[i];
};

export { randomBecameSponsorText, randomThanksText };
