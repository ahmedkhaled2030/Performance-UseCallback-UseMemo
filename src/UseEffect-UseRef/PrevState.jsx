import React, { useEffect, useRef, useState } from "react";

const PrevState = () => {
  const [term, setTerm] = useState("react");
  const prevTermState = useRef();

  useEffect(() => {
    prevTermState.current = term;
  });
    
    //***********useRef don't  trigger the re-render although useState do

  //1- initiate the component
  //state -> react / useRef => undefined
  // skip the useEffect
  //prevTerm -> userRef.current => undefined
  //render -> term(react) / useRef still undefined
  //do the effect -> useRef.current => react

  //****************
  //2 - change ->state
  //skip useEffect
  //prevTerm -> useRef.current => react
  //render -> term(react2)/ useRef(react)
  //do the effect -> useRef.current = term -> react 2

  const prevTerm = prevTermState.current;

  return (
    <div>
      <input
        placeholder="enter your text"
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />

      <p>Current term : {term}</p>
      <p>prev term : {prevTerm}</p>
    </div>
  );
};

export default PrevState;
