/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pages.css";
import theme from "../utilities/theme";

const MyStory = ({ colorMode }: { colorMode: string }): JSX.Element => {
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
          width: 75vw;
        `}
      >
        <h2
          className="title"
          css={css`
            font-size: 1.5rem;
          `}
        >
          My Story
        </h2>
      </div>
    </div>
  );
};

export default MyStory;
