import * as React from "react";
import { motion } from "framer-motion";
import { MobileMenuItem } from "./MobileMenuItem";
import { Dispatch, SetStateAction } from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNav = ({
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
}) => (
  <motion.ul
    variants={variants}
    style={{
      display: "flex",
      alignItems: "center",
      width: "230px",
      padding: "25px",
      position: "absolute",
      right: "-30px",
      top: "90px",
    }}
  >
    <MobileMenuItem
      colorMode={colorMode}
      menuItems={menuItems}
      selected={selected}
      setSelected={setSelected}
      setStrokeVar={setStrokeVar}
    />
  </motion.ul>
);
