import MyStory from "../pages/MyStory";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Contact from "../pages/Contact";
import { motion, Variants } from "framer-motion";

const HashLinkFrame = ({
  colorMode,
  width,
  breakpoint,
}: {
  colorMode: string;
  width: number;
  breakpoint: number;
}): JSX.Element => {
  const pageLoad: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
        duration: 0.6,
        delayChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 200,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };
  return (
    <div>
      <header id="home">
        <Home colorMode={colorMode} />
      </header>
      <header id="my-story" className="header">
        <motion.div
          variants={pageLoad}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <MyStory colorMode={colorMode} />
        </motion.div>
      </header>
      <header id="projects" className="header">
        <motion.div
          variants={pageLoad}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <Projects
            colorMode={colorMode}
            width={width}
            breakpoint={breakpoint}
          />
        </motion.div>
      </header>
      <header id="tech-stack" className="header">
        <motion.div
          variants={pageLoad}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <TechStack
            colorMode={colorMode}
            width={width}
            breakpoint={breakpoint}
          />
        </motion.div>
      </header>
      <header id="contact" className="header">
        <motion.div
          variants={pageLoad}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <Contact colorMode={colorMode} />
        </motion.div>
      </header>
    </div>
  );
};

export default HashLinkFrame;
