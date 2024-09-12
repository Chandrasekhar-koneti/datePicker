import React from "react";

const DateInputs = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          value={startDate.toISOString().substr(0, 10)}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          value={endDate?.toISOString().substr(0, 10) || ""}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="mt-1 block w-full text-sm p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default DateInputs;
