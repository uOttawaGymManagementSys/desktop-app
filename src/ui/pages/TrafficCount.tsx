import React, { useState } from "react";
import Counter from "../components/Counter";

const TrafficCount: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const setCounter = (newCount: number) => setCount(newCount);

  return (
    <Counter
      count={count}
      reset={reset}
      setCounter={setCounter}
    />
  );
};

export default TrafficCount;
