import React from "react";

interface Props {
  text: string;
  url: string;
}

const Link: React.FC<Props> = ({ text, url }) => {
  return (
    <a href={url} target="_blank" style={{ color: "inherit" }}>
      {text}
    </a>
  );
};

export { Link };
