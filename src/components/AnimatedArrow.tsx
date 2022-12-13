import { motion } from "framer-motion";
import theme from "../utilities/theme";

const AnimatedArrow = ({
  colorMode,
  arrowPath,
}: {
  colorMode: string;
  arrowPath: string;
}) => {
  const transition = {
    duration: 0.5,
    type: "spring",
    damping: 20,
    stiffness: 200,
  };
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="stackIconTitle"
    >
      <motion.path
        fill={
          colorMode === "dark"
            ? theme.colors.light.text
            : theme.colors.dark.text
        }
        strokeWidth=".25"
        stroke={
          colorMode === "dark"
            ? theme.colors.light.text
            : theme.colors.dark.text
        }
        strokeLinejoin="miter"
        strokeLinecap="square"
        animate={{ d: arrowPath }}
        transition={transition}
        initial="stack"
        whileHover="line"
      />
    </svg>
  );
};

export default AnimatedArrow;
