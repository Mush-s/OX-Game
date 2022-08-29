import "./App.css";
import Game from "./Game/Game";
import Overlay from "./model/Overlay";


function App() {
  return (
    <>
      <div className="App">
        <Game  />
        <Overlay  />
      </div>
    </>
  );
}

export default App;
