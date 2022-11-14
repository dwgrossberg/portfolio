import * as React from "react";
import { motion } from "framer-motion";
import { MobileMenuItem } from "./MobileMenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNav = ({ menuItems }: { menuItems: Array<string> }) => (
  <motion.ul variants={variants}>
    {menuItems.map((i) => (
      <MobileMenuItem i={i} key={i} text={i} />
    ))}
  </motion.ul>
);
