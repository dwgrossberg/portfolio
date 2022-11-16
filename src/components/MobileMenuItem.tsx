import * as React from "react";
import { motion } from "framer-motion";
import theme from "../utilities/theme";
import { Dispatch, SetStateAction } from "react";
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
}: {
  colorMode: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  menuItems: Array<string>;
  setStrokeVar: Dispatch<SetStateAction<string>>;
}) => {
  const style = {
    color:
      colorMode === "dark" ? theme.colors.light.text : theme.colors.dark.text,
  };
  return (
    <motion.li variants={variants}>
      <div className="text-placeholder" style={style}>
        {menuItems.map((el, i) => (
          <MenuItem
            text={el}
            key={i}
            selected={selected === i}
            colorMode={colorMode}
            onClick={() => {
              setSelected(i);
              setStrokeVar("10");
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
