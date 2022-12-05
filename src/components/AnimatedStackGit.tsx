import { motion } from "framer-motion";
import theme from "../utilities/theme";

const AnimatedStack = ({
  colorMode,
  gitPath,
}: {
  colorMode: string;
  gitPath: string;
}) => {
  const transition = {
    duration: 0.5,
    type: "spring",
    damping: 12,
    stiffness: 200,
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="stackIconTitle"
    >
      <motion.path
        fill="transparent"
        strokeWidth="1"
        stroke={
          colorMode === "dark"
            ? theme.colors.light.text
            : theme.colors.dark.text
        }
        strokeLinejoin="miter"
        strokeLinecap="square"
        animate={{ d: gitPath }}
        transition={transition}
        initial="stack"
        whileHover="line"
      />
    </svg>
  );
};

export default AnimatedStack;
