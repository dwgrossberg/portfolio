/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { RouteProps } from "react-router-dom";
import MyStory from "./MyStory";
import Home from "./Home";
import Projects from "./Projects";
import TechStack from "./TechStack";

const HashLinkFrame: FC = (props: RouteProps): JSX.Element => {
  return (
    <div>
      <header id="home">
        <Home />
      </header>
      <header
        id="my-story"
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
        <MyStory />
      </header>
      <header
        id="tech-stack"
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
        <TechStack />
      </header>
      <header
        id="projects"
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
        <Projects />
      </header>
    </div>
  );
};

export default HashLinkFrame;
