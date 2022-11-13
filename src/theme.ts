import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors: Object = {
  primary: "#DBDBDB",
  secondary: "#242424",
  tertiary: "#A5C9FF",
  quaternary: "A5FFC9",
};

const theme = extendTheme({ config }, { colors });

export default theme;
