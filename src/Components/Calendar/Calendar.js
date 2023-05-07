import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import DayTable from "./DayTable/DayTable";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(Date.now());

  const handleNextMonth = () => {
    const dateObject = new Date(currentDate);
    const dateObjectStamp = dateObject.setMonth(dateObject.getMonth() + 1);
    setCurrentDate(dateObjectStamp);
  };
  const handlePreviousMonth = () => {
    const dateObject = new Date(currentDate);
    const dateObjectStamp = dateObject.setMonth(dateObject.getMonth() - 1);
    setCurrentDate(dateObjectStamp);
  };
  console.log(currentDate);

  return (
    <Card classes={styles.card}>
      <DayTable
        currentDate={currentDate}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
    </Card>
  );
};

export default Calendar;
