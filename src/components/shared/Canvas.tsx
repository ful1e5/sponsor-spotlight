import React from "react";
import { Octocat } from "../svgs/Octocat";

import SvgImg from "./SvgImg";

interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  foregroundColor?: string;
  borderColor?: string;
}

const Canvas: React.FC<Props> = ({
  backgroundColor,
  foregroundColor,
  borderColor,
  children,
}) => {
  return (
    <SvgImg width="750px" height="135px">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: backgroundColor || "#d3d3d3",
          border: `2px solid ${borderColor || "#808080"}`,
          color: foregroundColor || "#020202",
          borderRadius: "15px",
          padding: "6px 10px",
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
                 transform: translateY(0) translateX(0);
               }
               25% {
                 transform: translateY(-2.5px) translateX(2.5px);
               }
               50% {
                 transform: translateY(2.5px) translateX(0px);
               }
               75% {
                 transform: translateY(-2.5px) translateX(-2.5.px);
               }
               100% {
                 transform: translateY(0) translateX(0);
               }
             }
          `}
        </style>
        <div
          style={{
            maxWidth: "100px",
            margin: "0px 5px",
            paddingRight: "10px",
            animation: "float 10s ease-in-out infinite",
          }}
        >
          <div id="cover">
            <Octocat />
          </div>
        </div>

        {children}
      </div>
    </SvgImg>
  );
};

export { Props, Canvas };
