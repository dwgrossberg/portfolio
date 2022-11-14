import { motion } from "framer-motion";
import theme from "../utilities/theme";

const AnimatedLogo = ({ colorMode }: { colorMode: string }) => {
  const transition = {
    duration: 1.5,
    ease: "easeInOut",
  };
  return (
    <div className="container">
      <svg
        width="50"
        height="50"
        viewBox="0 0 575 574"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M163.714 81.9282V163.856H81.8572H0V287V410.144H81.8572H163.714V492.072V574H246.33H328.944L369.869 533.031L410.792 492.063V449.595V407.128H451.703H492.614L533.558 366.164C556.077 343.633 574.504 324.861 574.505 324.446C574.506 324.031 537.671 323.692 492.65 323.692H410.792V284.989V246.287H492.896H575L533.829 205.072L492.659 163.856H451.726H410.792V122.887V81.9191L369.859 40.9591L328.926 0H246.32H163.714V81.9282ZM327.429 123.144V163.856H287.253H247.078V123.144V82.4308H287.253H327.429V123.144ZM163.714 287V327.713H123.539H83.3638V287V246.287H123.539H163.714V287ZM327.429 287V327.713H287.253H247.078V287V246.287H287.253H327.429V287ZM327.429 450.856V491.569H287.253H247.078V450.856V410.144H287.253H327.429V450.856Z"
          fill="transparent"
          strokeWidth="12"
          stroke={
            colorMode === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileHover={{ pathLength: 0 }}
          whileTap={{ pathLength: 250 }}
          transition={transition}
        />
      </svg>
      <motion.div
        className="box"
        initial={{ offsetDistance: "0%", scale: 2.5 }}
        animate={{ offsetDistance: "100%", scale: 1 }}
        whileHover={{ offsetDistance: "0%", scale: 2.5 }}
        transition={transition}
      />
    </div>
  );
};

export default AnimatedLogo;
