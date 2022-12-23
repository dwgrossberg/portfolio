/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../utilities/theme";
import { Image } from "@chakra-ui/react";
import casualMe from "../assets/casualMe.jpg";
import useFitText from "use-fit-text";
import { Fragment } from "react";
import "../styles/pages.css";

const MyStory = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const { fontSize, ref } = useFitText({ minFontSize: 75, maxFontSize: 1000 });
  return (
    <Fragment>
      <div
        style={{
          color:
            colorMode === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text,
        }}
        className="page"
        css={css`
          margin-bottom: -15rem;
          @media screen and (max-width: 600px) {
            margin-bottom: 7rem;
          }
        `}
      >
        <div className="page-container">
          <h2 className="title">My Story</h2>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 2rem;
              flex-direction: row;
              @media screen and (max-width: 600px) {
                align-items: center;
                flex-direction: column;
              }
            `}
          >
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
                  max-width: 185px;
                `}
              />
            </span>
            <div
              id="storyText"
              ref={ref}
              style={{ fontSize }}
              css={css`
                height: 300px;
                text-align: left;
                min-width: 200px;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: -0.5rem;
                @media screen and (max-width: 600px) {
                  width: 100%;
                  text-align: center;
                  place-self: center;
                }
              `}
            >
              <p>
                Hi, my name's Dan - I'm a father, a language nerd, a travel
                enthusiast, and an engineer who loves transforming complex ideas
                into immersive experiences.
              </p>
              <p>
                With a background in marketing and design, as well as computer
                science, I enjoy building dynamic software that fully engages
                end users.
              </p>
              <p>
                I'm a problem solver by nature, who enjoys wading through the
                technical details of a bug in search of a solution, whether it
                {`\u2019`}s drilling down into a complicated feature report or
                scrutinizing a high-level business concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyStory;
