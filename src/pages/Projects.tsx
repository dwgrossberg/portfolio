/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../utilities/theme";
import "../styles/pages.css";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      style={{
        color:
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
      }}
      className="page"
      css={css`
        @media screen and (max-width: 600px) {
          margin-bottom: 15rem;
        }
      `}
    >
      <div className="page-container">
        <h2
          className="title"
          css={css`
            margin-bottom: 5rem;
          `}
        >
          Projects
        </h2>
        <ProjectCard colorMode={colorMode} />
        <ProjectCard colorMode={colorMode} />
      </div>
    </div>
  );
};

export default Projects;
