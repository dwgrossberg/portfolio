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
          My Story
        </h2>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            @media screen and (max-width: 600px) {
              flex-direction: column-reverse;
            }
          `}
        >
          <p
            css={css`
              width: 50vw;
              text-align: justify;
              @media screen and (max-width: 600px) {
                width: 100%;
              }
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <span
            css={css`
              filter: drop-shadow(
                2px 3px 3px
                  ${colorMode === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text}
              );
            `}
          >
            <Image
              src={casualMe}
              alt="Daniel Grossberg"
              css={css`
                max-height: 330px;
                max-width: 275px;å
                min-width: 200px;
                width: 25vw;
                clip-path: polygon(
                  20% 0%,
                  80% 0%,
                  100% 20%,
                  100% 80%,
                  80% 100%,
                  20% 100%,
                  0% 80%,
                  0% 20%
                );
                @media screen and (max-width: 600px) {
                  width: 100%;
                  place-self: center;
                }
              `}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
