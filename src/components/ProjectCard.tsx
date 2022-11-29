/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import theme from "../utilities/theme";
import "../styles/pages.css";

const ProjectCard = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1.1, 1.2]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.25, 1], [0, -50, -150]);
  const xPosAnim = useTransform(scrollYProgress, [0, 0.25, 1], [0, 50, 150]);
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
        margin-bottom: 5rem;
        width: 100%;
      `}
    >
      <motion.div
        style={{ scale: scaleAnim }}
        css={css`
          background-color: ${colorMode === "dark"
            ? theme.colors.dark.backgroundBall
            : theme.colors.light.backgroundBall};
          border-radius: 0 3px 3px 3px;
          width: 60%;
          height: 300px;
          box-shadow: 0px 0px 5px 3px
            ${colorMode === "dark"
              ? theme.colors.dark.backgroundAccent
              : theme.colors.light.backgroundAccent};
          &:before {
            box-shadow: 0px 0px 2.5px 1.5px
              ${colorMode === "dark"
                ? theme.colors.dark.backgroundAccent
                : theme.colors.light.backgroundAccent};
            content: "project name";
            display: flex;
            justify-content: center;
            align-items: center;
            top: -35px;
            left: 0px;
            position: absolute;
            width: 150px;
            height: 35px;
            border-radius: 3px 3px 3px 0;
            color: ${colorMode === "dark"
              ? theme.colors.light.text
              : theme.colors.dark.text};
            background-color: ${colorMode === "dark"
              ? theme.colors.dark.backgroundAccent
              : theme.colors.light.backgroundAccent};
          }
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
            ? theme.colors.dark.projectCard
            : theme.colors.light.projectCard};
          opacity: 0.5;
          border-radius: 3px;
          width: 40%;
          height: 300px;
          position: absolute;
          right: 15vw;
          margin-top: 2.5rem;
          z-index: -1;
          box-shadow: 0px 0px 5px 3px
            ${colorMode === "dark"
              ? theme.colors.dark.backgroundAccent
              : theme.colors.light.backgroundAccent};
        `}
      ></motion.div>
    </div>
  );
};

export default ProjectCard;
