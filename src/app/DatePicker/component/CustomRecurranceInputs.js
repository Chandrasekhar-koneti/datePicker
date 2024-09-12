import React from "react";

const CustomRecurrenceInputs = ({
  recurrenceType,
  selectedDays,
  setSelectedDays,
  customRecurrence,
  setCustomRecurrence,
}) => {
  const dayOfWeekOptions = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (recurrenceType === "weekly") {
    return (
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Days of the Week
        </label>
        <div className="flex flex-wrap gap-2 mt-2">
          {dayOfWeekOptions.map((day) => (
            <label key={day} className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                value={day}
                checked={selectedDays.includes(day)}
                onChange={(e) => {
                  const { value, checked } = e.target;
                  setSelectedDays((prev) =>
                    checked ? [...prev, value] : prev.filter((d) => d !== value)
                  );
                }}
              />
              <span className="ml-2">{day}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (recurrenceType === "monthly") {
    return (
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Day of the Month
        </label>
        <input
          type="number"
          value={customRecurrence.dayOfMonth || 1}
          onChange={(e) =>
            setCustomRecurrence({
              ...customRecurrence,
              dayOfMonth: e.target.value,
            })
          }
          className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded"
        />
      </div>
    );
  }

  if (recurrenceType === "yearly") {
    return (
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Month
        </label>
        <select
          value={customRecurrence.month || ""}
          onChange={(e) =>
            setCustomRecurrence({
              ...customRecurrence,
              month: parseInt(e.target.value, 10),
            })
          }
          className="mt-1 block text-sm w-full p-2 border border-gray-300 rounded"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Day of the Month
        </label>
        <input
          type="number"
          value={customRecurrence.day || ""}
          onChange={(e) =>
            setCustomRecurrence({
              ...customRecurrence,
              day: parseInt(e.target.value, 10),
            })
          }
          className="mt-1 block text-sm w-full p-2 border border-gray-300 rounded"
        />
      </div>
    );
  }

  return null;
};

export default CustomRecurrenceInputs;
