/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Divider, Link } from "@chakra-ui/react";
import theme from "../utilities/theme";
import AnimatedStackLine from "./AnimatedStackProject";
import { useState } from "react";
import AnimatedStackGit from "./AnimatedStackGit";

const ProjectCard = ({
  colorMode,
  reverse,
  title,
  description,
  details,
  tech,
  gif,
  liveLink,
  repo,
  width,
  breakpoint,
  i,
}: {
  colorMode: string;
  reverse?: boolean;
  title: string;
  description: string;
  details: string;
  tech: string;
  gif: any;
  liveLink: string;
  repo: string;
  width: number;
  breakpoint: number;
  i: number;
}): JSX.Element => {
  const [projectPath, setProjectPath] = useState(
    "M10 7L14 7M6 12L18 12M3 17L21 17"
  );
  const [gitPath, setGitPath] = useState("M10 7L14 7M6 12L18 12M3 17L21 17");

  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1.1, 1.2]);
  const scaleMobile = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 1.1]);
  const yPosAnim = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7, 1],
    [500 / i, 0, -500 / i, -1000 / i, -1000]
  );
  const yPosMobile = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.8, 1],
    [1000, 375, 385, 395, -500]
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    reverse ? [0, -15, -30] : [0, 15, 30]
  );
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
        margin-bottom: ${width < breakpoint ? "40rem" : "20rem"};
        width: 100%;
        justify-content: ${reverse ? "flex-end" : "flex-start"};
        justify-content: ${width < breakpoint ? "center" : ""};
      `}
    >
      <motion.div
        style={{
          scale: scaleAnim,
        }}
        css={css`
          background-color: ${colorMode === "dark"
            ? theme.colors.dark.backgroundBall
            : theme.colors.light.backgroundBall};
          border-radius: 0 3px 3px 3px;
          width: ${width < breakpoint ? "90%" : "60%"};
          max-width: 500px;
          height: ${width < breakpoint ? "350px" : "400px"};
          box-shadow: 0px 0px 5px 3px
            ${colorMode === "dark"
              ? theme.colors.dark.backgroundAccent
              : theme.colors.light.backgroundAccent};
          position: relative;
          color: ${colorMode === "dark"
            ? theme.colors.light.text
            : theme.colors.dark.text};
          &:before {
            box-shadow: 0px 0px 5px 3px
              ${colorMode === "dark"
                ? theme.colors.dark.backgroundAccent
                : theme.colors.light.backgroundAccent};
            content: "${title}";
            font-size: 0.85rem;
            text-transform: uppercase;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            top: -35px;
            left: ${reverse ? "" : "0"};
            right: ${reverse ? "0" : ""};
            position: absolute;
            width: 185px;
            height: 35px;
            border-radius: 3px 3px 0 0;
            color: inherit;
            background-color: ${colorMode === "dark"
              ? theme.colors.dark.backgroundAccent
              : theme.colors.light.backgroundAccent};
            text-shadow: 0.5px 0.5px
              ${colorMode === "dark"
                ? theme.colors.dark.backgroundBall
                : theme.colors.light.backgroundBall};
          }
          &:after {
            background-color: ${colorMode === "dark"
              ? theme.colors.dark.backgroundBall
              : theme.colors.light.backgroundBall};
            height: 10px;
            content: "";
            position: absolute;
            top: 0px;
            left: ${reverse ? "" : "0px"};
            right: ${reverse ? "0px" : ""};
            width: 200px;
            z-index: 0;
          }
        `}
      >
        <div
          css={css`
            padding: 0.75rem;
            width: 100%;
            height: 100%;
            text-align: left;
            font-size: clamp(13px, 1.5vw, 16px);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          `}
        >
          <div>{description}</div>
          <div>{details}</div>
          <Divider
            borderColor={
              colorMode === "dark"
                ? theme.colors.light.text
                : theme.colors.dark.text
            }
          />
          <div
            css={css`
              font-style: italic;
              text-align: center;
            `}
          >
            Built with {tech}
          </div>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={repo}
            isExternal
          >
            <motion.div
              css={css`
                text-align: center;
                font-size: clamp(14px, 1.6vw, 18px);
                display: flex;
                gap: 15px;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: clamp(14px, 1.6vw, 18px);
                cursor: pointer;
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => {
                setGitPath("M 2,12 h 20");
              }}
              onMouseLeave={() => {
                setGitPath("M10 7L14 7M6 12L18 12M3 17L21 17");
              }}
            >
              <AnimatedStackGit colorMode={colorMode} gitPath={gitPath} />
              GitHub
              <AnimatedStackGit colorMode={colorMode} gitPath={gitPath} />
            </motion.div>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            href={liveLink}
            isExternal
          >
            <motion.div
              css={css`
                display: flex;
                gap: 15px;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: clamp(14px, 1.6vw, 18px);
                cursor: pointer;
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => {
                setProjectPath("M 2,12 h 20");
              }}
              onMouseLeave={() => {
                setProjectPath("M10 7L14 7M6 12L18 12M3 17L21 17");
              }}
            >
              <AnimatedStackLine
                colorMode={colorMode}
                projectPath={projectPath}
              />
              Live Site
              <AnimatedStackLine
                colorMode={colorMode}
                projectPath={projectPath}
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={projectBackground}
        initial={"hidden"}
        animate={"visible"}
        viewport={{ once: true }}
        style={{
          scale: width < breakpoint ? scaleMobile : scaleAnim,
          y: width < breakpoint ? yPosMobile : yPosAnim,
          x: width < breakpoint ? (reverse ? -15 : 15) : xPosAnim,
        }}
        css={css`
          border-radius: 3px;
          width: ${width < breakpoint ? "85%" : "40%"};
          height: ${width < breakpoint ? "350px" : "400px"};
          position: absolute;
          right: ${reverse ? "" : "10vw"};
          left: ${reverse ? "10vw" : ""};
          place-self: center;
          margin-top: 2.5rem;
          z-index: -1;
          box-shadow: 0px 0px 5px 3px
            ${colorMode === "dark"
              ? theme.colors.dark.backgroundAccent
              : theme.colors.light.backgroundAccent};
        `}
      >
        <img
          src={gif}
          alt={title}
          css={css`
            border-radius: 3px;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
            object-position: ${title === "Knight's Playground" ? "left" : ""};
          `}
        ></img>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
