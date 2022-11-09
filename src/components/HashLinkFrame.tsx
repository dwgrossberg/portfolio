/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import MyStory from "./MyStory";
import Home from "./Home";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Contact from "./Contact";

const HashLinkFrame: FC = (props: RouteProps): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
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
      <header
        id="contact"
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
        <Contact />
      </header>
    </div>
  );
};

export default HashLinkFrame;
