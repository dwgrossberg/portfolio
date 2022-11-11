/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { HashLink } from "react-router-hash-link";

const MenuItem = ({
  text,
  selected,
  onClick,
}: {
  text: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => (
  <motion.div
    whileHover={{
      y: [0, -1.5, 1.5, 0],
      color: "#a5c9ff",
    }}
    whileTap={{}}
    transition={{
      duration: 0.25,
      ease: "easeInOut",
    }}
    className="menu-item"
    onClick={onClick}
    css={css`
      margin: 0 1.5rem;
      font-size: 1.5rem;
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
            height: 4px;
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
