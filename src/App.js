import "./App.sass";
import { Timer } from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer secondsLeft={4379} />
    </div>
  );
}

export default App;
