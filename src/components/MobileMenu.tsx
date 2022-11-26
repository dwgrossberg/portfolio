import * as React from "react";
import { Dispatch, SetStateAction, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utilities/useDimensions";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { MobileNav } from "./MobileNav";
import "../styles/mobileMenu.css";
import theme from "../utilities/theme";

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
    clipPath: "circle(22.5px at 190px 43px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = ({
  selected,
  setSelected,
  colorMode,
  menuItems,
  setStrokeVar,
  width,
  breakpoint,
}: {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  colorMode: string;
  menuItems: Array<string>;
  setStrokeVar: Dispatch<SetStateAction<string>>;
  width: number;
  breakpoint: number;
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
      <motion.div
        className="background"
        variants={sidebar}
        style={{
          background:
            colorMode === "dark"
              ? theme.colors.dark.mobileMenu
              : theme.colors.light.mobileMenu,
          border:
            colorMode === "dark"
              ? `1px solid ${theme.colors.light.mobileMenu}`
              : `1px solid ${theme.colors.dark.mobileMenu}`,
        }}
      />
      <MobileNav
        selected={selected}
        setSelected={setSelected}
        menuItems={menuItems}
        colorMode={colorMode}
        setStrokeVar={setStrokeVar}
        toggle={() => toggleOpen()}
        isOpen={isOpen}
        width={width}
        breakpoint={breakpoint}
      />
      <MobileMenuToggle toggle={() => toggleOpen()} colorMode={colorMode} />
    </motion.nav>
  );
};
