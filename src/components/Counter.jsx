import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <section>
      <h2>Counter</h2>

      <p>{count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </section>
  );
}

export default Counter;