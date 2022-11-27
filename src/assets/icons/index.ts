import html from "./html5-original.svg";
import css from "./css3-plain-wordmark.svg";
import sass from "./sass-original.svg";
import js from "./javascript-original.svg";
import ts from "./typescript-original.svg";
import python from "./python-original-wordmark.svg";
import babel from "./babel-original.svg";
import git from "./git-original.svg";
import jest from "./jest-plain.svg";
import npm from "./npm-original-wordmark.svg";
import react from "./react-original-wordmark.svg";
import vite from "./Vitejs-logo.svg";
import webpack from "./webpack-original.svg";
import eslint from "./eslint-original.svg";
import nodejs from "./nodejs-original.svg";
import mui from "./material-ui-1.svg";
import chakra from "./chakra-icon.svg";
import framerMotion from "./framer-motion.svg";
import firebase from "./firebase-plain-wordmark.svg";
import vsCode from "./vscode-original.svg";

export const icons: any = [
  {
    img: html,
    text: "HTML5",
    href: "https://en.wikipedia.org/wiki/HTML5",
  },
  {
    img: python,
    text: "Python3",
    href: "https://www.python.org/",
  },
  {
    img: git,
    text: "Git",
    href: "https://git-scm.com/",
  },
  {
    img: webpack,
    text: "Webpack",
    href: "https://webpack.js.org/",
  },
  {
    img: mui,
    text: "MUI",
    href: "https://mui.com/",
  },
  {
    img: css,
    text: "CSS3",
    href: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    img: js,
    text: "JavaScript",
    href: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    img: babel,
    text: "Babel",
    href: "https://babeljs.io/",
  },
  {
    img: react,
    text: "React",
    href: "https://reactjs.org/",
  },
  {
    img: chakra,
    text: "Chakra",
    href: "https://chakra-ui.com/",
  },
  {
    img: sass,
    text: "Sass",
    href: "https://sass-lang.com/",
  },
  {
    img: ts,
    text: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    img: npm,
    text: "npm",
    href: "https://www.npmjs.com/",
  },
  {
    img: vite,
    text: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    img: framerMotion,
    text: "Framer Motion",
    href: "https://www.framer.com/motion/",
  },
  {
    img: vsCode,
    text: "VSCode",
    href: "https://code.visualstudio.com/",
  },
  {
    img: nodejs,
    text: "nodeJS",
    href: "https://nodejs.org/en/",
  },
  {
    img: eslint,
    text: "ESLint",
    href: "https://eslint.org/",
  },
  {
    img: jest,
    text: "Jest",
    href: "https://jestjs.io/",
  },
  {
    img: firebase,
    text: "Firebase",
    href: "https://firebase.google.com",
  },
];
export const iconsByIndex = (index: number) => icons[index % icons.length];
