import React from "react";

import SvgImg from "./SvgImg";

interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  foregroundColor?: string;
  borderColor?: string | number;
}

const Canvas: React.FC<Props> = ({
  backgroundColor,
  foregroundColor,
  borderColor,
  children,
}) => {
  return (
    <SvgImg width="750px" height="150px">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: backgroundColor || "#d3d3d3",
          border: `1px solid ${borderColor || "#808080"}`,
          color: foregroundColor || "#020202",
          borderRadius: "6px",
          padding: "6px 10px",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
          fontSize: "14px",
          lineHeight: "1.5",
          wordWrap: "break-word",
          fontWeight: 400,
        }}
      >
        {children}
      </div>
    </SvgImg>
  );
};

export { Props, Canvas };
