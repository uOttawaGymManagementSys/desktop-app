import React, { useState } from "react";
import Counter from "../components/Counter";

const TrafficCount: React.FC = () => {
  const [count, setCount] = useState(0);
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
