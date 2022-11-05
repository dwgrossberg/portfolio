import Doodle from "./components/doodle";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Doodle
        className="css-doodle"
        onClick={(e: any) => {
          e.target.update && e.target.update();
        }}
        rule={`
       :doodle {
          @grid: 5x5 / 250px;
          background-color: #6e85a1;
          border-radius: 4px;
        }
        transition: .5s ease all;
        @even {
          transform: rotate(@p(90deg, 270deg));
        }
        @odd {
          transform: rotate(@p(0deg, 180deg));
        }
        ::before,
        ::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: @m(2, linear-gradient(
            calc(90deg * @n()),
            transparent 10%,
            #fff 10%,
            #fff calc(10% + 2px),
            #6e85a1 calc(10% + 2px),
            #6e85a1 20%,
            #fff 20%,
            #fff calc(20% + 2px),
            #6e85a1 calc(20% + 2px),
            #6e85a1 30%,
            #fff 30%,
            #fff calc(30% + 2px),
            #6e85a1 calc(30% + 2px),
            #6e85a1 40%,
            #fff 40%,
            #fff calc(40% + 2px),
            transparent calc(40% + 2px)
          ));
          clip-path: polygon(0 0, 100% 0 ,0 100%);
        }
        ::after {
          transform: rotate(180deg);
        }
        `}
      />
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
    </div>
  );
};

export default App;
