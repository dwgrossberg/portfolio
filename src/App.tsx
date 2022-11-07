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
          top: -30px;
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
  @grid: 15;
			@size: 100vmax;
    }
		
		background: linear-gradient(@pick-d(0deg, 90deg, 180deg, 270deg), #434343 25%, #242424 25% 50%, #242424 50%);
		@random(.2) {
		:after {
			content: "";
			@size: @r(10%, 25%);
			border-radius: 50%;
			background: radial-gradient(circle at @r(100%) @r(100%), #DBDBDB 0% 50%, #A5FFC9 50% 100%);
			display: @pick(none, unset);
			transform: translateX(@r(-30%, -60%));
			animation: floatAnim @r(4s, 6s) @r(6s) infinite alternate ease-in-out;
		}
  }
		
		@keyframes floatAnim {
			100% {
				transform: translateX(@r(100%, 100%));
        transform: translateY(@r(100%, 100%));

			}
		}
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
