/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pageStyles.css";

const Contact = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      style={{
        color: colorMode === "dark" ? "ghostwhite" : "#191919",
      }}
      className="page"
    >
      <h2>contact</h2>
    </div>
  );
};

export default Contact;