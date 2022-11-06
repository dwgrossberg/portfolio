/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Doodle from "./components/doodle";
import "./App.css";

const App = () => {
  return (
    <div
      className="App"
      css={css`
        height: 6000px;
      `}
    >
      <div
        css={css`
          position: fixed;
          top: 0;
          right: 0;
          clip-path: polygon(
            54% 42%,
            80% 10%,
            73% 40%,
            100% 70%,
            44% 57%,
            50% 100%,
            20% 90%,
            0% 70%,
            0% 35%,
            20% 10%
          );
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
       @shape: circle;
    :after {
    content: "";
    @size: 2vmax;
    border: solid 1.5vmax #21295C;
    border-radius: 100%;
    transform: translate(0,-0.5em);
    }
  :before {
    content: "";
    @size: .01vmax;
    border: solid 1.5vmax rgba(158, 179, 194, .7);
    border-radius: 100%;
    position: absolute;
    transform: translate(0,-0.5em);
  }
  :doodle {
    @grid: 15 / 100vmax;
    background: #21295C;
  } 
  transform: rotate(@rand(360)deg);
  background: @pick(#1B3B6F, #065A82);
  transition: .2s @rand(.6s);
  @size: 80%;
  margin: auto;
  :hover{ 
    transform: rotate(@rand(360)deg);
    transition: .2s;
  }
        `}
        />
      </div>
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
    </div>
  );
};

export default App;
