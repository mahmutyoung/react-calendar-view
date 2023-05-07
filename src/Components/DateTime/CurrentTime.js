import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrentTime;
