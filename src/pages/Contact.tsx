/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
        "service_a0602jv",
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
            place-self: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 400px;
          `}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            css={css`
              width: 100%;
              padding: 5px;
              background-color: ${colorMode === "dark"
                ? theme.colors.light.backgroundSec
                : theme.colors.dark.backgroundSec};
            `}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            css={css`
              width: 100%;
              padding: 5px;
            `}
          />
          <textarea
            name="message"
            placeholder="Message"
            css={css`
              width: 100%;
              padding: 5px;
            `}
          />
          <input
            type="submit"
            value="Send"
            css={css`
              padding: 5px 10px;
              cursor: pointer;
            `}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
