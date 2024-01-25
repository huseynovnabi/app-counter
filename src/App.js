import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={() => setCount((t) => t + 5)}>+</button>
      <button onClick={() => setCount((t) => t - 5)}>-</button>
    </div>
  );
}

export default App;
