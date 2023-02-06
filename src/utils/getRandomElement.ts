import { randomInt } from "crypto";

const getRandomElement = (array: string[]): string => {
  const i = randomInt(array.length);
  return array[i];
};

export { getRandomElement };
