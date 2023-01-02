/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import theme from "../utilities/theme";

const ToggleSwitch = ({
  colorMode,
  setColorMode,
  style,
}: {
  colorMode: string;
  setColorMode: Dispatch<SetStateAction<string>>;
  style: any;
}) => {
  const [toggleDirection, setToggleDirection] = useState(
    colorMode === "dark" ? 0 : 20
  );
  const toggleOn = () => {
    setToggleDirection(toggleDirection === 0 ? 20 : 0);
    setColorMode(colorMode === "dark" ? "light" : "dark");
    localStorage.setItem("colorMode", colorMode === "dark" ? "light" : "dark");
  };

  return (
    <div style={style}>
      <div
        css={css`
          position: relative;
        `}
      >
        <span
          css={css`
            position: absolute;
            top: 2px;
            left: 5px;
            z-index: -1;
          `}
        >
          <MoonIcon color="#191919" />
        </span>
        <span
          css={css`
            position: absolute;
            top: 2px;
            right: 5px;
            z-index: -1;
          `}
        >
          <SunIcon color="ghostwhite" />
        </span>
      </div>
      <motion.div
        className="switch"
        onTap={toggleOn}
        style={{
          backgroundColor:
            colorMode === "dark"
              ? theme.colors.dark.toggle
              : theme.colors.light.toggle,
        }}
        css={css`
          width: 50px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.4);
          display: flex;
          justify-content: flex-start;
          border-radius: 50px;
          padding: 5px;
          cursor: pointer;
          box-shadow: 0px 0px 5px 0.5px
            ${colorMode === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text};
        `}
      >
        <motion.div
          className="handle"
          whileHover={{ scale: 1.2 }}
          onTap={toggleOn}
          animate={{
            x: toggleDirection,
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          css={css`
            width: 20px;
            height: 20px;
            background-color: ghostwhite;
            border-radius: 40px;
          `}
        />
      </motion.div>
    </div>
  );
};

export default ToggleSwitch;
