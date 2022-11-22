/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MyStory from "../pages/MyStory";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Contact from "../pages/Contact";
import { motion, Variants } from "framer-motion";

const HashLinkFrame = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const pageLoad: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: 300,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  return (
    <div>
      <header id="home">
        <Home colorMode={colorMode} />
      </header>
      <header
        id="my-story"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <motion.div
          variants={pageLoad}
          initial={"hidden"}
          whileInView={"visible"}
        >
          <MyStory colorMode={colorMode} />
        </motion.div>
      </header>
      <header
        id="tech-stack"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <motion.div variants={pageLoad} initial={"hidden"} animate={"visible"}>
          <TechStack colorMode={colorMode} />
        </motion.div>
      </header>
      <header
        id="projects"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <motion.div variants={pageLoad} initial={"hidden"} animate={"visible"}>
          <Projects colorMode={colorMode} />
        </motion.div>
      </header>
      <header
        id="contact"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <motion.div variants={pageLoad} initial={"hidden"} animate={"visible"}>
          <Contact colorMode={colorMode} />
        </motion.div>
      </header>
    </div>
  );
};

export default HashLinkFrame;
