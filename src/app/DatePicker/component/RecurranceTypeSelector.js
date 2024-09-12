import React from "react";

const RecurrenceTypeSelector = ({ recurrenceType, setRecurrenceType }) => {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        Recurrence Type
      </label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="mt-1 block text-sm w-full p-2 border border-gray-300 rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceTypeSelector;
