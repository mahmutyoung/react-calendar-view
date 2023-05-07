import React from "react";

import styles from "./DayContainer.module.css";
import Day from "./Day";

const DayContainer = ({ day, currentDate }) => {
  const dateObject = new Date(currentDate);
  console.log({ day });
  console.log(day.toDateString() === new Date().toDateString());
  let classes = styles.default;
  if (day.getMonth() === dateObject.getMonth()) {
    classes = styles.current__month;
    if (day.toDateString() === new Date().toDateString()) {
      classes = styles.current__day;
    }
  }
  return (
    <td className={classes}>
      <Day date={day.getDate()} />
    </td>
  );
};
export default DayContainer;
