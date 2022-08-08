import React from 'react';
import style from './Counter.module.css';

type counterProps = { value: number, isLoading: boolean };

const Counter = ({ value, isLoading }: counterProps) => {
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
