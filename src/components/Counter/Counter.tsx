import React from 'react';
import style from './Counter.module.css';

type counterProps = { value: number, isLoading: boolean };

const Counter = ({ value, isLoading }: counterProps) => {
  const addSeconds = (valueSecond: number) => {
    if (value === 1) {
      return 'секунду';
    } else if (valueSecond > 1 && valueSecond < 5) {
      return 'секунди';
    }
    return 'секунд';
  };
  return (
    <div className={style.TagCounterContainer}>
      {isLoading && <span>Оновлюється</span>}

      {!isLoading && (
        <>
          <span>Інфорація оновится через</span>
          <strong>{value}</strong> {addSeconds(value)}
        </>
      )}
    </div>
  );
};

export default Counter;
