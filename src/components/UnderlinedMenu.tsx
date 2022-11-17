/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import MenuItem from "./MenuItem";

const UnderlinedMenu = ({
  selected,
  setSelected,
  colorMode,
  menuItems,
  setStrokeVar,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  colorMode: string;
  menuItems: Array<string>;
  setStrokeVar: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      className="underlined-menu"
      css={css`
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center left;
        margin-right: -1rem;
      `}
    >
      <div
        className="wrapper"
        css={css`
          display: flex;
          justify-content: space-evenly;
          margin-right: 1rem;
        `}
      >
        {menuItems.map((el, i) => (
          <MenuItem
            text={el}
            key={i}
            selected={selected === i}
            colorMode={colorMode}
            mobileClass={""}
            onClick={() => {
              setSelected(i);
              setStrokeVar("10");
            }}
            onTap={() => {
              setSelected(i);
              setStrokeVar("10");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UnderlinedMenu;
