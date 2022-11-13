/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pageStyles.css";

const MyStory = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      style={{
        color: colorMode === "dark" ? "ghostwhite" : "#191919",
      }}
      className="page"
    >
      <h2>my story</h2>
    </div>
  );
};

export default MyStory;
