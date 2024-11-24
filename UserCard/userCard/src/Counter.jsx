import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function countManager() {
    setCount(count + 1);
  }
  function resetCount() {
    setCount(count * 0);
  }

  return (
    <div className="counter-countainer">
      <h1>count : {count}</h1>
      <div>
        <button onClick={countManager}>increase</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
