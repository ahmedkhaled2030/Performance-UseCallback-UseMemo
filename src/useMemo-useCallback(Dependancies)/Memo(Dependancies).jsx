import React, { useCallback, useMemo, useState } from "react";
import ViewCounter from "./ViewCounter";
import ViewText from "./ViewText";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Ahmed" });

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  const name = useMemo(() => {
    return user;
  }, [user]);

  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) {
        return prev;
      } else {
        return { ...prev, age: 30 };
      }
    });
  }, []);
  console.log(user);

  return (
    <div
      className="useMemo"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ViewCounter num={count} increaseCount={counterHandler} />
      <ViewText text={name} addAge={ageHandler} />
    </div>
  );
};

export default Memo;
