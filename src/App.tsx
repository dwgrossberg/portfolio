/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Doodle from "./utilities/doodle";
import { FC, useEffect, useState } from "react";
import Nav from "./components/Nav";
import HashLinkFrame from "./components/HashLinkFrame";
import storage from "./utilities/storage";
import theme from "../src/theme";

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
          <Doodle
            className="css-doodle"
            onClick={(e: any) => {
              e.target.update && e.target.update();
            }}
            onMouseOver={(e: any) => {
              e.target.style.transform = "rotate(@rand(360)deg)";
              e.target.style.transition = ".2s;";
            }}
            rule={`
          :doodle {
            @grid: 17;
			      @size: 100vmax;
          }
		
		      background: linear-gradient(@pick-d(0deg, 90deg, 180deg, 270deg), #191919 25%, ${
            colorMode === "dark" ? "#141414" : "#DBDBDB"
          }  25% 50%, ${colorMode === "dark" ? "#141414" : "#DBDBDB"} 50%);
		      @random(.1) {
		        :after {
			        content: "";
			        @size: @r(5%, 25%);
			        border-radius: 50%;
			        background: radial-gradient(circle at @r(100%) @r(100%), #DBDBDB 0% 50%, #A5FFC9 50% 100%);
			        display: @pick(none, unset);
			        transform: translateX(@r(-100%, 100%)) ;
			        animation: floatAnim @r(4s, 6s) @r(6s) infinite alternate ease-in-out;
              opacity: @r(1);
              z-index:1;
		        }
          }
		
		      @keyframes floatAnim {
			      100% {
				      transform: translateX(@r(100%, 700%));
              transform: translateY(@r(100%, 700%));
			      }
		      }
        `}
          />
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
