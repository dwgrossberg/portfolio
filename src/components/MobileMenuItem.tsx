import * as React from "react";
import { motion } from "framer-motion";
import theme from "../utilities/theme";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MobileMenuItem = ({
  colorMode,
  selected,
  setSelected,
  menuItems,
  setStrokeVar,
  toggle,
  isOpen,
  width,
  breakpoint,
}: {
  colorMode: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  menuItems: Array<string>;
  setStrokeVar: Dispatch<SetStateAction<string>>;
  toggle: MouseEventHandler<HTMLButtonElement | MouseEvent>;
  isOpen: boolean;
  width: number;
  breakpoint: number;
}) => {
  const style = {
    color:
      colorMode === "dark" ? theme.colors.dark.text : theme.colors.light.text,
    display: "flex",
    flexDirection: "column" as "column",
    width: "120px",
    alignItems: "center",
    justifyContent: "center",
    cursor: isOpen && width < breakpoint ? "pointer" : "default",
  };
  return (
    <motion.li variants={variants}>
      <div style={style}>
        {menuItems.map((el, i) => (
          <MenuItem
            text={el}
            key={i}
            mobileClass="yes"
            selected={selected === i}
            colorMode={colorMode}
            isOpen={isOpen}
            width={width}
            breakpoint={breakpoint}
            onClick={() => {
              setSelected(i);
              setStrokeVar("10");
              {
                toggle();
              }
            }}
            onTap={() => {
              setSelected(i);
              setStrokeVar("10");
            }}
          />
        ))}{" "}
      </div>
    </motion.li>
  );
};
