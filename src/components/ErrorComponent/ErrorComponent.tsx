import React, { FC } from 'react';
import spinerTechnical from './../../svg/Gear-0.6s-254px.svg';
import spinerConnection from './../../svg/Radio-1s-267px.svg';
import style from './ErrorComponent.module.css';

type errorComponentProps = { typeError: 'technical' | 'connect' };

const ErrorComponent: FC<errorComponentProps> = ({ typeError }) => {
  debugger;
  return (
    <div className={style.errorContainer}>
      {typeError === 'technical' ? (
        <h2>Проводяться технічні роботи</h2>
      ) : (
        <h2>Нема зв'язку з інтернетом...</h2>
      )}

      <img
        src={typeError === 'technical' ? spinerTechnical : spinerConnection}
        alt="Loading"
      />
    </div>
  );
};

export default ErrorComponent;
