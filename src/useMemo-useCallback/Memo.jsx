//it takes a copy from the props it will cache the props
//but be carefully it will make a huge size of cache
//if the component don't give new props the component will not re evaluate if the state changed in another component
// it will compare the value in first render and second render if it not changed it will stop the render to the component it self

import React, { useCallback, useMemo, useState } from "react";
import ViewCounter from "./ViewCounter";
import ViewText from "./ViewText";

const Memo = () => {
  const [count, setCount] = useState(0);

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  //  const name = 'ahmed'

  const name = useMemo(() => {
    return { name: "Ahmed" };
  }, []);
  // useMemo for array and object and the return of function only if it not reference type and it will be primitive
  //type we don't need useMemo cause we wrap the component with React.memo(ViewText)
  //  useMemo => it memoize the syntax after return only

  const ageHandler = useCallback(() => {
    console.log("age");
  }, []);

  //  useCallback => it memoize every line in it

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
