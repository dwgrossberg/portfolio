import Doodle from "./components/doodle";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Doodle
        rule={`
        :doodle {
        @grid: 12 / 8em;
        }
        background: #60569e;
        transform: scale(@rand(.2, .9));
        `}
      />
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
    </div>
  );
};

export default App;
