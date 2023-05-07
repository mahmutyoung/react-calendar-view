import React from "react";

import DayContainer from "../DayContainer/DayContainer.js";
import Header from "../Header/Header.js";
import styles from "./DayTable.module.css";

const DayTable = ({ currentDate, handleNextMonth, handlePreviousMonth }) => {
  let visibleDays = [];

  //find date for each cell on the table.
  (() => {
    for (let i = 0; i < 42; i++) {
      const dateObject = new Date(currentDate);
      const weekDay = dateObject.getDay();

      const monthDay = dateObject.getDate();

      const monthFirstWeekDay =
        weekDay - ((monthDay % 7) - 1) <= 0
          ? weekDay - ((monthDay % 7) - 1) + 7
          : weekDay - ((monthDay % 7) - 1);
      console.log({ weekDay, monthDay, monthFirstWeekDay });
      const monthFirstDayObjectStamp = dateObject.setDate(
        dateObject.getDate() - (monthDay - 1)
      );
      const monthFirstDayObject = new Date(monthFirstDayObjectStamp);

      const dayTableFirstDayObjectStamp = monthFirstDayObject.setDate(
        monthFirstDayObject.getDate() - (monthFirstWeekDay - 1) + i
      );
      const dayTableFirstDayObject = new Date(dayTableFirstDayObjectStamp);
      visibleDays.push(dayTableFirstDayObject);
    }
  })();

  const dayTable = [];
  for (let i = 0; i < visibleDays.length; i += 7) {
    const weekDays = visibleDays.slice(i, i + 7);
    const weekDaysCells = weekDays.map((day, index) => (
      <DayContainer key={index} day={day} currentDate={currentDate} />
    ));
    dayTable.push(<tr key={i}>{weekDaysCells}</tr>);
  }
  console.log(dayTable);
  return (
    <table className={styles.calendar__table}>
      <Header
        currentDate={currentDate}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
      <tbody>{dayTable}</tbody>
    </table>
  );
};

export default DayTable;
