import React from "react";
const CurrentDate = () => {
  const date = new Date();
  return (
    <div>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};

export default CurrentDate;
