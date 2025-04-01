import React, { useState } from "react";

interface CounterProps {
  count: number;
  reset: () => void;
  setCounter: (newCount: number) => void;
}

const Counter: React.FC<CounterProps> = ({ count, reset, setCounter }) => {
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    if (newValue === "" || !isNaN(Number(newValue))) {
      setCounter(newValue === "" ? 0 : Number(newValue)); // Set 0 if empty
    }
  };

  const handleSubmit = () => {
    setCounter(count); // Submit the counter value
    setShowToast(true); // Show toast upon submission
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="p-2 pl-4  max-w-[300px] mx-auto">
      <div className="flex mb-5 items-start justify-between">
        <div className="w-full text-center">
          <h1 className="text-stone-500 mb-2 text-xl">Input traffic:</h1>
          <input
            type="number"
            value={count === 0 ? "" : count} // Show empty if count is 0
            onChange={handleInputChange}
            className="py-0.5 rounded border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#5C1419] text-lg text-center inline-block w-auto min-w-[3rem] max-w-[6rem]"
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        <button className="px-4 bg-gray-500 text-white text-lg rounded cursor-pointer" onClick={reset}>Reset</button>
        <button className="px-4 bg-blue-500 text-white text-lg rounded cursor-pointer" onClick={handleSubmit}>Submit</button>
      </div>

      {/* Toast message */}
      {showToast && (
        <div className={`mt-4 px-6 py-4 rounded shadow-lg ${count > 0 ? 'bg-green-500' : 'bg-red-300'} text-white`}>
            <span>{count > 0 ? 'Submission Successful!' : 'Please enter a valid number'}</span>
        </div>
      )}
    </div>
  );
};

export default Counter;
