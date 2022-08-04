import React from "react";
import style from "./Counter.module.css";

const Counter = ({ value, isLoading }) => {
  return (
    <div className={style.TagCounterContainer}>
      {
        isLoading && <span>Оновлюється</span>
      }

      {
        !isLoading && (
          <>
            <span>Інфорація оновится через</span>
            <strong>{value}</strong> {value > 1 ? "секунд" : "секнуду"}
          </>
        )
      }
    </div>
  );
};

export default Counter;
