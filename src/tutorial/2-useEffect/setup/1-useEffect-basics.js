import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [svalue, setSvalue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `New messages(${value})`;
    }
  }, [value]);
  console.log(`render component`);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        change title
      </button>
      <h1>{svalue}</h1>
      <button className="btn" onClick={() => setSvalue(svalue + 1)}>
        second render
      </button>
    </>
  );
};

export default UseEffectBasics;
