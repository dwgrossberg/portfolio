/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../utilities/theme";
import { Image } from "@chakra-ui/react";
import casualMe from "../assets/casualMe.jpg";
import "../styles/pages.css";

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
          gap: 3rem;
          width: 75vw;
        `}
      >
        <h2
          className="title"
          css={css`
            font-size: 1.5rem;
            margin-left: 3rem;
          `}
        >
          My Story
        </h2>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <p
            css={css`
              width: 50vw;
            `}
          >
            mi stori
          </p>
          <Image
            src={casualMe}
            alt="Daniel Grossberg"
            css={css`
              width: 35vw;
              clip-path: polygon(
                75% 0%,
                100% 50%,
                75% 100%,
                0% 100%,
                25% 50%,
                0% 0%
              );
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default MyStory;
