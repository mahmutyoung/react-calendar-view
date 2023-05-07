import Calendar from "./Components/Calendar/Calendar";
import DateTime from "./Components/DateTime/DateTime";
import styles from "./App.module.css";


const App = () => {
  return (
    <div className={styles.container}>
      <DateTime />
      <Calendar />
    </div>
  );
};

export default App;
