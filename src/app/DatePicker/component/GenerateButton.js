import React from "react";

const GenerateButton = ({ generateRecurrenceDates }) => {
  return (
    <div className="mt-4">
      <button
        onClick={generateRecurrenceDates}
        className="w-full bg-[#00394d] text-white p-2 rounded"
      >
        Generate Recurrence Dates
      </button>
    </div>
  );
};

export default GenerateButton;
