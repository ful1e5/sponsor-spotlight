import React from "react";
import { Octocat } from "../svgs/Octocat";

import SvgImg from "./SvgImg";

interface Props {
  children?: React.ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  borderColor: string;
}

const Canvas: React.FC<Props> = ({
  backgroundColor,
  foregroundColor,
  borderColor,
  children,
}) => {
  return (
    <SvgImg width="850px" height="125px">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: backgroundColor,
          border: `2px solid ${borderColor}`,
          color: foregroundColor,
          borderRadius: "8px",
          padding: "2px 20px 2px 10px",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
          fontSize: "14px",
          lineHeight: "1.5",
          wordWrap: "break-word",
          fontWeight: 400,
        }}
      >
        <style>
          {`
             @keyframes float {
               0% {
                 transform: translateY(-2px);
               }
               50% {
                 transform: translateY(5px);
               }
               100% {
                 transform: translateY(-2px);
               }
             }
          `}
        </style>
        <div
          id="cover"
          style={{
            maxWidth: "100px",
            margin: "0px 5px",
            paddingRight: "10px",
            animation: "float 5s ease-in-out infinite",
          }}
        >
          <Octocat />
        </div>

        {children}
      </div>
    </SvgImg>
  );
};

export { Props, Canvas };
