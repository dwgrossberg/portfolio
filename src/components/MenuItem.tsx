/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { HashLink } from "react-router-hash-link";

const MenuItem = ({
  text,
  selected,
  colorMode,
  onClick,
  onTap,
}: {
  text: string;
  selected: boolean;
  colorMode: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  onTap: (event: MouseEvent | TouchEvent | PointerEvent) => void;
}) => (
  <motion.div
    whileHover={{
      y: [0, -2.5, 2, -1],
      color: "#a5c9ff",
    }}
    transition={{
      duration: 0.25,
      ease: "easeInOut",
    }}
    animate={{ opacity: selected ? 1 : 0.5 }}
    className="menu-item"
    onClick={onClick}
    onTap={onTap}
    css={css`
      margin: 0 0.5rem;
      width: 90px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      &:first-of-type {
        margin-left: 0.5rem;
      }
    `}
  >
    <HashLink
      smooth
      to={
        text.indexOf(" ") >= 0
          ? "/#" +
            text.toLowerCase().split(" ")[0] +
            "-" +
            text.toLowerCase().split(" ")[1]
          : "/#" + text.toLowerCase()
      }
      style={{
        textDecoration: "none",
        color: colorMode === "dark" ? "ghostwhite" : "#191919",
      }}
      css={css`
        color: inherit;
      `}
    >
      {text}
      {selected && (
        <motion.div
          className="underline"
          layoutId="underline"
          css={css`
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 2px;
            border-radius: 15px;
            background: white;
            opacity: 0.85;
          `}
        />
      )}
    </HashLink>
  </motion.div>
);

export default MenuItem;
