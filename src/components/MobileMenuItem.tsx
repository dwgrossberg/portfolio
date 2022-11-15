import * as React from "react";
import { motion } from "framer-motion";
import theme from "../utilities/theme";

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
  i,
  text,
  colorMode,
}: {
  i: any;
  text: string;
  colorMode: string;
}) => {
  const style = {
    color:
      colorMode === "dark" ? theme.colors.dark.text : theme.colors.light.text,
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-placeholder" style={style}>
        {text}
      </div>
    </motion.li>
  );
};
