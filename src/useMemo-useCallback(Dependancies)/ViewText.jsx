import React from "react";

const ViewText = ({ text, addAge }) => {
  console.log("view text component1");

  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log("view text component2");
  };

  apiConnect();

  return (
    <div
      style={{
        border: "1px solid #000",
        width: "30%",
        padding: "10px",
        marginTop: "20px",
      }}
    >
       <button onClick={addAge}>add Age</button>
   
      <p>{text.name}</p>
      <p>{text.age}</p>
    </div>
  );
};

export default React.memo(ViewText);
