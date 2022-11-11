/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import MenuItem from "./MenuItem";

const UnderlinedMenu = () => {
  const [selected, setSelected] = useState(0);
  const menuItems = ["My Story", "Tech Stack", "Projects", "Contact"];

  return (
    <div
      className="underlined-menu"
      css={css`
        height: 100%;
        width: 700px;
        display: grid;
        place-items: center left;
        color: #171717;
      `}
    >
      <div
        className="wrapper"
        css={css`
          display: flex;
          justify-content: space-evenly;
        `}
      >
        {menuItems.map((el, i) => (
          <MenuItem
            text={el}
            key={i}
            selected={selected === i}
            onClick={() => {
              setSelected(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UnderlinedMenu;
