/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SendAMessage from "../components/SendAMessage";
import { Divider } from "@chakra-ui/react";
import theme from "../utilities/theme";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import GitHubSVG from "../components/GitHubSVG";
import GmailSVG from "../components/GmailSVG";
import LinkedInSVG from "../components/LinkedInSVG";
import "../styles/pages.css";
import { Fragment } from "react";

const Contact = ({ colorMode }: { colorMode: string }): JSX.Element => {
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
      >
        <div className="page-container">
          <h2 className="title">Contact</h2>
          <p
            css={css`
              margin-left: 3rem;
              place-self: flex-start;
              margin-bottom: 1rem;
              max-width: 65vw;
              text-align: left;
              @media screen and (max-width: 600px) {
                margin-left: 0;
                text-align: center;
                place-self: center;
              }
            `}
          >
            If you'd like to reach out about an opportunity, a collaboration, or
            just to chat, please send me a message and I'll get back to you.
          </p>
          <SendAMessage colorMode={colorMode} />
          <Divider
            borderWidth=".5px"
            borderColor={
              colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall
            }
            marginTop="2rem"
            marginBottom="2rem"
          />
          <div
            css={css`
              display: flex;
              place-self: center;
              gap: 2.5rem;
            `}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:dwgrossberg@gmail.com">
                <GmailSVG colorMode={colorMode} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com/dwgrossberg" isExternal>
                <GitHubSVG colorMode={colorMode} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://www.linkedin.com/in/dgrossberg/" isExternal>
                <LinkedInSVG colorMode={colorMode} />
              </Link>
            </motion.div>
          </div>
          <Divider
            borderWidth=".5px"
            borderColor={
              colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall
            }
            marginTop="2rem"
            marginBottom="2rem"
          />
          <div
            css={css`
              place-self: center;
            `}
          >
            My portfolio is{" "}
            <Link
              href="https://github.com/dwgrossberg/dwgrossberg.github.io"
              isExternal
            >
              open source
            </Link>
          </div>
          <div
            css={css`
              place-self: center;
              margin-top: -2rem;
            `}
          >
            Copyright {`\u00A9`} 2023 | Daniel Grossberg
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
