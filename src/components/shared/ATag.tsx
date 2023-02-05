import React from "react";

interface Props {
  text: string;
  url: string;
}

const ATag: React.FC<Props> = ({ text, url }) => {
  return (
    <a href={url} target="_blank" style={{ color: "#020202" }}>
      {text}
    </a>
  );
};

export { Props, ATag };
