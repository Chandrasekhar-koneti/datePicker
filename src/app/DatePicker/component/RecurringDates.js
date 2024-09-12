"use client";
import React, { useState } from "react";

const RecurringDates = ({ recurrenceDates }) => {
  const initialDatesCount = 10;

  const [showAll, setShowAll] = useState(false);
  const handleToggleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="mt-4">
      {recurrenceDates?.length > 0 && (
        <h3 className="text-base font-bold text-[#00394d]">Recurrence Dates</h3>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {(showAll
          ? recurrenceDates
          : recurrenceDates?.slice(0, initialDatesCount)
        )?.map((date, index) => (
          <div
            key={index}
            className="text-sm font-semibold list-none bg-gray-300 m-1 w-[120px] text-center p-2"
          >
            <p>{new Date(date).toDateString()}</p>
          </div>
        ))}
        {recurrenceDates?.length > initialDatesCount && (
          <button
            onClick={handleToggleShow}
            className="mt-4 px-4 py-2 text-xs text-gray-500 font-semibold rounded "
          >
            {showAll ? "Show Less Dates" : "Show All Dates"}
          </button>
        )}
      </div>
    </div>
  );
};

export default RecurringDates;
