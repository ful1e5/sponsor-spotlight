import React from "react";

import { Goal } from "../types";

interface Props {
  goal: Goal | null;
}

const SponsorshipBar: React.FC<Props> = ({ goal }) => {
  if (goal) {
    const progress = goal.percentComplete;
    const barText = `${progress}% towards ${goal.title} goal`;
    return (
      <>
        <div
          style={{
            textAlign: "left",
            padding: 2,
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {barText}
        </div>
        <div
          style={{
            width: "40%",
            height: "5px",
            backgroundColor: "rgba(255,255,255,0.09)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#bf4b8a",
              borderRadius: "10px",
              animation: "progressAnimation 1s ease-in",
            }}
          />
          <style>
            {`
          @keyframes progressAnimation {
            0% {
              width: 0%;
            }
            50% {
              width: ${progress + 1}%;
            }
            100% {
              width: ${progress}%;
            }
          }
        `}
          </style>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export { SponsorshipBar };
