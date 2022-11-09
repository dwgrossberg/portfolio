/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { RouteProps } from "react-router-dom";
import Home from "./Home";

const HashLinkFrame: FC = (props: RouteProps): JSX.Element => {
  return (
    <div>
      <header id="home">
        <Home />
      </header>
      <header
        id="about"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <Home />
      </header>
    </div>
  );
};

export default HashLinkFrame;
