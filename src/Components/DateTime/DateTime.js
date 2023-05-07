import React from "react";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import Card from "../UI/Card";
import styles from './DateTime.module.css'
const DateTime = () => {
  return (
    <Card>
      <h1 className={styles.title }>React Calendar</h1>
      <CurrentDate />
      <CurrentTime />
    </Card>
  );
};

export default DateTime;
