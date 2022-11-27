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
    alt: "HTML5",
    href: "https://en.wikipedia.org/wiki/HTML5",
  },
  {
    img: python,
    text: "python3",
    alt: "python3",
    href: "https://en.wikipedia.org/wiki/HTML5",
  },
  git,
  webpack,
  mui,
  css,
  js,
  babel,
  react,
  chakra,
  sass,
  ts,
  npm,
  vite,
  framerMotion,
  vsCode,
  nodejs,
  eslint,
  jest,
  firebase,
];
export const iconsByIndex = (index: number) => icons[index % icons.length];
