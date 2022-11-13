/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Nav from "./components/Nav";
import HashLinkFrame from "./components/HashLinkFrame";
import storage from "./utilities/storage";
import theme from "../src/theme";
import BackgroundDark from "./components/BackgroundDark";
import BackgroundLight from "./components/BackgroundLight";

const App: FC = () => {
  const [colorMode, setColorMode] = useState(localStorage.colorMode || "dark");
  useEffect(() => {
    storage();
  }, [colorMode]);
  return (
    <ChakraProvider theme={theme}>
      <div
        className="App"
        css={css`
          position: relative;
          display: grid;
          grid-template: 100px repeat(auto-fit, minmax(500px, 1fr)) / 1fr;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: fixed;
            top: 0;
            right: 0;
            z-index: -1;
          `}
        >
          {colorMode === "dark" ? <BackgroundDark /> : <BackgroundLight />}
        </div>
        <HashRouter>
          <Nav colorMode={colorMode} setColorMode={setColorMode} />
          <Routes>
            <Route path="/" element={<HashLinkFrame />} />
          </Routes>
        </HashRouter>
      </div>
    </ChakraProvider>
  );
};

export default App;
