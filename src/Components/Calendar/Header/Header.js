import React from "react";
import styles from "./Header.module.css";

const Header = ({ currentDate, handleNextMonth, handlePreviousMonth }) => {
  const dateObject = new Date(currentDate);
  const year = dateObject.getFullYear();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][dateObject.getMonth()];

  return (
    <thead>
      <tr>
        <th colSpan={1} className={styles.year}>
          {year}
        </th>
        <th colSpan={6} className={styles.month}>
          <button className={styles.btn} onClick={handlePreviousMonth}>
            +
          </button>
          <span>{month}</span>
          <button className={styles.btn} onClick={handleNextMonth}>
            +
          </button>
        </th>
      </tr>
      <tr className={styles["week-days"]}>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
      </tr>
    </thead>
  );
};

export default Header;
