/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import theme from "../utilities/theme";
import "../styles/pages.css";

const ProjectCard = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -200]);
  const xPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 200]);
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
        type: "easeInOut",
        damping: 12,
        stiffness: 50,
      },
    },
  };
  return (
    <div
      css={css`
        display: flex;
        margin-top: 5rem;
        width: 100%;
      `}
    >
      <motion.div
        style={{ scale: scaleAnim }}
        css={css`
          background-color: ${colorMode === "dark"
            ? theme.colors.dark.backgroundBall
            : theme.colors.light.backgroundBall};
          border-radius: 3px;
          width: 100%;
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
          background-color: ${colorMode === "dark"
            ? theme.colors.dark.backgroundAccent
            : theme.colors.light.backgroundAccent};
          border-radius: 3px;
          width: 80%;
          height: 400px;
          position: absolute;
          left: 15vw;
          margin-top: 2.5rem;
          z-index: -1;
        `}
      ></motion.div>
    </div>
  );
};

export default ProjectCard;
