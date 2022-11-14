/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pageStyles.css";
import theme from "../utilities/theme";

const TechStack = ({ colorMode }: { colorMode: string }): JSX.Element => {
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
      <h2>tech stack</h2>
    </div>
  );
};

export default TechStack;
