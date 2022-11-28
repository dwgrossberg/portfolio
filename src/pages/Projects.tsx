/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  motion,
  Variants,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import theme from "../utilities/theme";
import "../styles/pages.css";

const Projects = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.5]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -150, -250]);
  const xPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, 150, 250]);
  const projectBackground: Variants = {
    visible: {
      opacity: 1,
      transition: {
        y: 100,
        type: "easeInOut",
        damping: 12,
        stiffness: 150,
        duration: 1,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };
  return (
    <div
      style={{
        color:
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
      }}
      className="page"
      css={css`
        margin-bottom: -15rem;
        @media screen and (max-width: 600px) {
          margin-bottom: 7rem;
        }
      `}
    >
      <div className="frameContainer">
        <h2 className="title">projects</h2>
        <div
          css={css`
            display: flex;
            margin-top: 5rem;
          `}
        >
          <motion.div
            style={{ scale: scaleAnim }}
            css={css`
              background-color: pink;
              width: 500px;
              height: 400px;
            `}
          ></motion.div>
          <motion.div
            variants={projectBackground}
            initial={"hidden"}
            animate={"visible"}
            viewport={{ once: true }}
            style={{ scale: scaleAnim, y: yPosAnim, x: xPosAnim }}
            css={css`
              background-color: blue;
              width: 500px;
              height: 400px;
              position: absolute;
              left: 15vw;
              margin-top: 5rem;
              z-index: -1;
            `}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
