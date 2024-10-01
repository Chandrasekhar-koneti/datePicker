"use client";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useRecurrence } from "../../../context/RecurrenceProvider";
import RecurringDates from "./component/RecurringDates";
import CalendarRecurringDate from "./component/CalendarRecurringDate";
import GenerateButton from "./component/GenerateButton";
import CustomRecurrenceInputs from "./component/CustomRecurranceInputs";
import RecurrenceTypeSelector from "./component/RecurranceTypeSelector";
import DateInputs from "./component/RecurranceDateInputs";

const DatePicker = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const {
    recurrenceType,
    setRecurrenceType,
    customRecurrence,
    setCustomRecurrence,
    recurrenceDates,
    setRecurrenceDates,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useRecurrence();

  const generateRecurrenceDates = () => {
    let dates = [];
    let currentDate = new Date(startDate);

    const dayOfWeekMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    const selectedDayNumbers = selectedDays.map((day) => dayOfWeekMap[day]);

    while (!endDate || currentDate <= endDate) {
      switch (recurrenceType) {
        case "daily":
          dates.push(new Date(currentDate));
          currentDate.setDate(
            currentDate.getDate() + (customRecurrence.interval || 1)
          );
          break;

        case "weekly":
          if (selectedDayNumbers.includes(currentDate.getDay())) {
            dates.push(new Date(currentDate));
          }
          currentDate.setDate(currentDate.getDate() + 1);
          break;

        case "monthly":
          dates.push(new Date(currentDate));
          const dayOfMonth = customRecurrence.dayOfMonth || 1;
          currentDate.setMonth(
            currentDate.getMonth() + (customRecurrence.interval || 1)
          );
          currentDate.setDate(dayOfMonth);
          break;

        case "yearly":
          dates.push(new Date(currentDate));
          const month = customRecurrence.month || 0;
          const day = customRecurrence.day || 1;
          currentDate.setFullYear(currentDate.getFullYear() + 1);
          currentDate.setMonth(month);
          currentDate.setDate(day);
          break;

        default:
          break;
      }
    }

    setRecurrenceDates(dates);
  };
  const isRecurringDate = (date) => {
    const dateString = date.toDateString();
    const result = recurrenceDates.some(
      (recurrenceDate) => new Date(recurrenceDate).toDateString() === dateString
    );
    return result;
  };
  return (
    <div className=" md:w-[40%] bg-white shadow-md p-3 sm:w-[420px] md:mx-auto text-[#00394d]">
      <h1 className="text-2xl font-bold text-[#00394d] text-center">
        Date Picker
      </h1>
      <h1 className="text-lg text-[#00394d] font-semibold mt-2">
        Select Recurrence{" "}
      </h1>
      <DateInputs
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <RecurrenceTypeSelector
        recurrenceType={recurrenceType}
        setRecurrenceType={setRecurrenceType}
      />

      <CustomRecurrenceInputs
        recurrenceType={recurrenceType}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        customRecurrence={customRecurrence}
        setCustomRecurrence={setCustomRecurrence}
      />

      <GenerateButton generateRecurrenceDates={generateRecurrenceDates} />

      <div className="my-8">
        <CalendarRecurringDate isRecurringDate={isRecurringDate} />
      </div>

      <div className="my-8">
        <RecurringDates recurrenceDates={recurrenceDates} />
      </div>
    </div>
  );
};

export default DatePicker;
