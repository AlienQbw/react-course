import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  /* const firstValue = text || "hello world";
  const secondValue = text && "hello world"; */
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1>
      {} */}
      <h1>{text ? text : `default if falsy`}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {/*       {!text && <h1>hello world</h1>} */}
      {isError && <h2>Error Is TRUE!</h2>}
      {isError ? <p>is true</p> : <p>is false</p>}
    </>
  );
};

export default ShortCircuit;
