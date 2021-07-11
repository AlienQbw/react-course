import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1>
      {} */}
      <h1>{text ? text : `default if falsy`}</h1>
      {!text && <h1>hello world</h1>}
    </>
  );
};

export default ShortCircuit;
