/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@chakra-ui/react";
import Doodle from "./components/doodle";
import "./App.css";

const App = () => {
  return (
    <div
      className="App"
      css={css`
        height: 6000px;
        position: relative;
      `}
    >
      <div
        css={css`
          position: fixed;
          top: -20px;
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
@grid: 8 / 100vmax;

@size: 1px calc(141.4% + 1px);
transform: rotate(@p(±45deg));
background: #AEACFB;
margin: auto;
        `}
        />
      </div>
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
      <Box
        w="100%"
        h="400px"
        bg="blue"
        bgImage="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
        bgSize="cover"
        bgAttachment="fixed"
        bgPos="50% 100%"
        pos="relative"
        bgRepeat="no-repeat"
      >
        {" "}
      </Box>
    </div>
  );
};

export default App;
