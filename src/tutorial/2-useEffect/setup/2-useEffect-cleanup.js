import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  console.log(window.innerWidth);
  return (
    <>
      <h1>window</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default UseEffectCleanup;
