import html from "./html5-original.svg";
import css from "./css3-plain-wordmark.svg";
import sass from "./sass-original.svg";
import js from "./javascript-original.svg";
import ts from "./typescript-original.svg";
import python from "./python-original-wordmark.svg";

export const icons = [html, css, sass, js, ts, python];
export const iconsByIndex = (index: number) => icons[index % icons.length];
