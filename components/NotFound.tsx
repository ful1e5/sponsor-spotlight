import React from "react";

import { Link, Canvas } from "./shared";
import { Error as ErrorSVG } from "./svgs";

interface Props {
  user: { login: string; url: string };
}

const NotFound: React.FC<Props> = ({ user }) => {
  return (
    <Canvas
      backgroundColor="linear-gradient(90.19deg, #402301 4.22%, #6A460F 41.84%)"
      borderColor="#E39E4D"
      foregroundColor="#FFFFFF"
    >
      <ErrorSVG />
      <p>
        Unable to locate a listing for Github Sponsors associated with the
        Github account{" "}
        <b>
          <Link text={`@${user.login}`} url={user.url} />
        </b>
        . It is possible that the account you are seeking may not be active or
        may not have enrolled in the Github Sponsors program.
      </p>
    </Canvas>
  );
};

export { NotFound };
