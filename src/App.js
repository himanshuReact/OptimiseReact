import "./styles.css";
import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Let's Optimise this!</h1>
      <h2>Stop the unnecessary child re-render</h2>
      <h1>Hello from Parent {counter}</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <button onClick={() => setCounter(counter + 1)}>+1 increement</button>
      <Child counter={counter} />

      {/* <Child counter={counter} updateCounter={updateCounter} /> */}
    </div>
  );
}

// export default function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="App">
//       <h1>Let's Optimise this!</h1>
//       <h2>Stop the unnecessary child re-render</h2>
//       <h1>Hello from Parent {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+1 increement</button>
//       <Child  />
//     </div>
//   );
// }

// const updateCounter = useCallback(() => {
//   setCounter(counter + 1);
// }, [counter]);
