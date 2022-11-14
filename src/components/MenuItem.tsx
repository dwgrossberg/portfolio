/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { HashLink } from "react-router-hash-link";
import theme from "../utilities/theme";

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
        margin-left: 1rem;
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
        color:
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
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
          style={{
            background:
              colorMode === "dark"
                ? theme.colors.dark.text
                : theme.colors.light.text,
          }}
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
