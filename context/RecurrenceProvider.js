"use client";
import React, { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const useRecurrence = () => {
  return useContext(RecurrenceContext);
};

export const RecurrenceProvider = ({ children }) => {
  const [recurrenceType, setRecurrenceType] = useState("daily");
  const [customRecurrence, setCustomRecurrence] = useState({});
  const [recurrenceDates, setRecurrenceDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const value = {
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
  };

  return (
    <RecurrenceContext.Provider value={value}>
      {children}
    </RecurrenceContext.Provider>
  );
};
