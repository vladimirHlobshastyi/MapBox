import React from 'react';
import style from './Counter.module.css';
import { CounterPropTypes } from "./Counter.types";

const Counter = ({ value = 0, isLoading }: CounterPropTypes) => {
  return (
    <div className={style.TagCounterContainer}>
      {isLoading && <span>Оновлюється</span>}

      {!isLoading && (
        <>
          <span>Інфорація оновится через</span>
          <strong>{value}</strong> {value > 1 ? 'секунд' : 'секнуду'}
        </>
      )}
    </div>
  );
};

export default Counter;
