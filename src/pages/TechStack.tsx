/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pages.css";
import theme from "../utilities/theme";

const TechStack = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      style={{
        color:
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
      }}
      className="page"
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3rem;
          width: 75vw;
          @media screen and (max-width: 600px) {
            align-items: center;
          }
        `}
      >
        <h2
          className="title"
          css={css`
            font-size: 1.5rem;
            margin-left: 3rem;
            @media screen and (max-width: 600px) {
              margin-left: 0;
            }
          `}
        >
          Tech Stack
        </h2>
      </div>
    </div>
  );
};

export default TechStack;
