import React from "react";

const ViewCounter = ({ num, increaseCount }) => {
  console.log("Counter");
  return (
    <div style={{ border: "1px solid #000", width: "30%", padding: "10px" }}>
      <p>{num}</p>
      <button onClick={increaseCount}>increase</button>
    </div>
  );
};

export default ViewCounter;
