/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import MenuItem from "./MenuItem";

const UnderlinedMenu = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const menuItems = ["My Story", "Tech Stack", "Projects", "Contact"];

  useEffect(() => {
    const path = document.location.hash.substring(3);
    switch (path) {
      case "my-story":
        setSelected(0);
        break;
      case "tech-stack":
        setSelected(1);
        "underline";
        break;
      case "projects":
        setSelected(2);
        "underline";
        break;
      case "contact":
        setSelected(3);
        "underline";
        break;
    }
  }, []);
  return (
    <div
      className="underlined-menu"
      css={css`
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center left;
        color: ghostwhite;
        margin-right: -1.5rem;
      `}
    >
      <div
        className="wrapper"
        css={css`
          display: flex;
          justify-content: space-evenly;
          margin-right: 1.5rem;
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
