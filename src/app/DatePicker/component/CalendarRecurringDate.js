"use client";
import React from "react";
import Calendar from "react-calendar";

const CalendarRecurringDate = ({ isRecurringDate, recurrenceDates }) => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-[#00394d]">
        Recurrence Calendar
      </h3>
      <Calendar
        key={recurrenceDates?.length}
        tileClassName={({ date }) =>
          isRecurringDate(date) ? "highlight" : null
        }
      />
    </div>
  );
};

export default CalendarRecurringDate;
