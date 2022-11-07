/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RouteProps } from "react-router-dom";

// type TParams = { id: number };

const Home = (props: RouteProps): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
    </div>
  );
};

export default Home;
