/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../utilities/theme";
import ProjectCard from "../components/ProjectCard";
import projectDetails from "../utilities/projectDetails";
import "../styles/pages.css";

const Projects = ({
  colorMode,
  width,
  breakpoint,
}: {
  colorMode: string;
  width: number;
  breakpoint: number;
}): JSX.Element => {
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
        margin-bottom: -5rem;
        @media screen and (max-width: 600px) {
          margin-bottom: -15rem;
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
        {projectDetails.projects.map((item) => {
          return (
            <ProjectCard
              colorMode={colorMode}
              reverse={item.reverse}
              title={item.title}
              description={item.description}
              tech={item.tech}
              img={item.img}
              gif={item.gif}
              liveLink={item.liveLink}
              repo={item.repo}
              width={width}
              breakpoint={breakpoint}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
