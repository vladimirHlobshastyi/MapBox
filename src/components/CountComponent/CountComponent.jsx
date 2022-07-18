import React from "react";
import { useEffect, useState } from "react";
import style from "./CountComponent.module.css";

const CountComponent = ({ isGetUpdate }) => {
  let [count, setCount] = useState(0);

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
