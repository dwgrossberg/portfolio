/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const Contact: FC = ({ ...props }): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        min-height: 100vmax;
        margin-top: -1.5em;
      `}
    >
      <h2>contact</h2>
    </div>
  );
};

export default Contact;
