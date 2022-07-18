import React from "react";
import { useEffect, useState } from "react";
import style from "./CountComponent.module.css";

const CountComponent = ({ onChange }) => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (onChange) {
      setCount(0);
    }
  }, [onChange]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.TimerContainer}>
      <div>{count}</div>
    </div>
  );
};

export default CountComponent;
