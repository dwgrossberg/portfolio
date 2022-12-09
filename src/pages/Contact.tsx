/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import theme from "../utilities/theme";
import "../styles/pages.css";

const Contact = ({ colorMode }: { colorMode: string }): JSX.Element => {
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
            `}
          />
          <textarea
            name="message"
            placeholder="Message"
            css={css`
              width: 100%;
              padding: 5px;
              color: ${colorMode === "dark"
                ? theme.colors.light.text
                : theme.colors.dark.text};
              background-color: ${colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall};
            `}
          />
          <motion.input
            type="submit"
            value="Send"
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
            transition={{ duration: 0.5 }}
            css={css`
              width: 50%;
              place-self: center;
              margin-top: 10px;
              padding: 5px 10px;
              cursor: pointer;
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
