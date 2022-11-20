import { motion } from "framer-motion";
import theme from "../utilities/theme";

const AnimatedLine = ({ colorMode }: { colorMode: string }) => {
  const transition = {
    duration: 0.25,
    delay: 0.45,
    ease: "easeInOut",
  };
  return (
    <svg width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
      <motion.line
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: [0.2, 0.4, 0.6, 0.8, 1],
        }}
        transition={transition}
        x1="0"
        y1="20"
        x2="100%"
        y2="20"
        strokeWidth={0.5}
        stroke={
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
      />
    </svg>
  );
};

export default AnimatedLine;
