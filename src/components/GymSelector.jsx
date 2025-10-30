const GymSelector = ({ onSelectGym }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Select a Gym</h1>

      <div className="flex gap-8">
        <button
          onClick={() => onSelectGym(4)}
          className="px-10 py-4 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          HLC
        </button>

        <button
          onClick={() => onSelectGym(3)}
          className="px-10 py-4 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          MNT
        </button>
      </div>
    </div>
  );
};

export default GymSelector;
