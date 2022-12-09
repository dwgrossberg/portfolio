/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import theme from "../utilities/theme";
import AnimatedArrow from "../components/AnimatedArrow";
import "../styles/pages.css";

const Contact = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const [arrowPath, setArrowPath] = useState(
    "M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
  );
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current == null) return;
    emailjs
      .sendForm(
        "service_a0602jv",
        "template_nyanq8b",
        form.current,
        "8syD1KJGLl2vrXqtp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <form
          ref={form}
          onSubmit={sendEmail}
          css={css`
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 400px;
            place-self: center;
          `}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            css={css`
              width: 100%;
              padding: 5px;
              color: ${colorMode === "dark"
                ? theme.colors.light.text
                : theme.colors.dark.text};
              background-color: ${colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall};
              &:focus {
                outline: 3px solid
                  ${colorMode === "dark"
                    ? theme.colors.dark.backgroundAccent
                    : theme.colors.light.backgroundAccent};
              }
            `}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            css={css`
              width: 100%;
              padding: 5px;
              color: ${colorMode === "dark"
                ? theme.colors.light.text
                : theme.colors.dark.text};
              background-color: ${colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall};
              &:focus {
                outline: 3px solid
                  ${colorMode === "dark"
                    ? theme.colors.dark.backgroundAccent
                    : theme.colors.light.backgroundAccent};
              }
            `}
          />
          <textarea
            name="message"
            placeholder="Message"
            css={css`
              width: 100%;
              padding: 5px;
              margin-bottom: 10px;
              color: ${colorMode === "dark"
                ? theme.colors.light.text
                : theme.colors.dark.text};
              background-color: ${colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall};
              &:focus {
                outline: 3px solid
                  ${colorMode === "dark"
                    ? theme.colors.dark.backgroundAccent
                    : theme.colors.light.backgroundAccent};
              }
            `}
          />
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: `0px 0px 15px 9px ${
                colorMode === "dark"
                  ? theme.colors.dark.backgroundAccent
                  : theme.colors.light.backgroundAccent
              }`,
              textShadow: `2px 2px
                ${
                  colorMode === "dark"
                    ? theme.colors.dark.backgroundBall
                    : theme.colors.light.backgroundBall
                }`,
              borderRadius: "7px",
            }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => {
              setArrowPath(
                "M5 24.225V7.776h22v16.447H5v.002zm3.011-1.815h15.978l-5.111-5.115L16 20.179l-2.877-2.883-5.112 5.114zm-1.216-1.275l5.077-5.09-5.077-5.065v10.155zm13.332-5.09l5.079 5.09V10.979l-5.079 5.066zm-4.126 1.588l8.022-8.027-16.045-.001 8.023 8.028z"
              );
            }}
            onMouseLeave={() => {
              setArrowPath(
                "M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
              );
            }}
            css={css`
              position: relative;
              width: 35%;
              place-self: center;
            `}
          >
            <input
              type="submit"
              value="Send"
              css={css`
                width: 100%;
                place-self: center;
                padding: 5px 10px;
                cursor: pointer;
                text-align: left;
                padding-left: 37px;
                color: ${colorMode === "dark"
                  ? theme.colors.light.text
                  : theme.colors.dark.text};
                background-color: ${colorMode === "dark"
                  ? theme.colors.dark.backgroundAccent
                  : theme.colors.light.backgroundAccent};
                box-shadow: 0px 0px 5px 3px
                  ${colorMode === "dark"
                    ? theme.colors.dark.backgroundAccent
                    : theme.colors.light.backgroundAccent};
                text-shadow: 1px 1px
                  ${colorMode === "dark"
                    ? theme.colors.dark.backgroundBall
                    : theme.colors.light.backgroundBall};
              `}
            />
            <div
              css={css`
                position: absolute;
                width: 20px;
                right: 27%;
                top: 8%;
              `}
            >
              <AnimatedArrow colorMode={colorMode} arrowPath={arrowPath} />
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
