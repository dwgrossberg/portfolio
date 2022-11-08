/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { RouteProps } from "react-router-dom";
import Home from "./Home";

const HashLinkFrame: FC = (props: RouteProps): JSX.Element => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Home />
      </div>
    </div>
  );
};

export default HashLinkFrame;
