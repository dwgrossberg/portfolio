/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pages.css";
import theme from "../utilities/theme";

const Contact = ({ colorMode }: { colorMode: string }): JSX.Element => {
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
        contact
      </h2>
    </div>
  );
};

export default Contact;
