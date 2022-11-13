/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pageStyles.css";

const Home = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      style={{
        color: colorMode === "dark" ? "ghostwhite" : "#191919",
      }}
      className="page"
    >
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
    </div>
  );
};

export default Home;
