import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <div
        className="btn-box
      "
      >
        <button className="increment" onClick={() => setCount(count + 1)}>
          increment
        </button>
        <button className="decrement" onClick={() => setCount(count - 1)}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
