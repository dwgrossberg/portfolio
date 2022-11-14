import * as React from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utilities/useDimensions";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { MobileNav } from "./MobileNav";
import "../styles/mobileMenu.css";

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 213px 43px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = ({
  colorMode,
  menuItems,
}: {
  colorMode: string;
  menuItems: Array<string>;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <MobileNav menuItems={menuItems} />
      <MobileMenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
