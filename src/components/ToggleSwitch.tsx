/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../src/index.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const [toggleDirection, setToggleDirection] = useState(0);
  const toggleOn = () => {
    setToggleDirection(toggleDirection === 0 ? 10 : 0);
  };

  return (
    <motion.div
      className="switch"
      data-ison={isOn}
      onTap={toggleOn}
      css={css`
        width: 25px;
        height: 15px;
        background-color: rgba(255, 255, 255, 0.4);
        display: flex;
        justify-content: flex-start;
        border-radius: 50px;
        padding: 5px;
        cursor: pointer;
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
          width: 15px;
          height: 15px;
          background-color: white;
          border-radius: 40px;
        `}
      />
    </motion.div>
  );
};

export default ToggleSwitch;
