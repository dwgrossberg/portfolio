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
      <div className="page-container">
        <h2 className="title">contact</h2>
      </div>
    </div>
  );
};

export default Contact;
