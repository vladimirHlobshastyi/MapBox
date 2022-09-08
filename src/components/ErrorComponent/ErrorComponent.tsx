import React, { FC } from 'react';
import spinerTechnical from './../../svg/Gear-0.6s-254px.svg';
import spinerConnection from './../../svg/Radio-1s-267px.svg';
import style from './ErrorComponent.module.css';

type errorComponentProps = { typeError: 'technical' | 'connect' };

const ErrorComponent: FC<errorComponentProps> = ({ typeError }) => {
  return (
    <div className={style.errorContainer}>
      <img
        src={typeError === 'technical' ? spinerTechnical : spinerConnection}
        alt="Loading"
      />
      {typeError === 'technical' ? (
        <h2>Зачекайте, проводяться технічні роботи</h2>
      ) : (
        <h2>Нема зв'язку з інтернетом...</h2>
      )}
    </div>
  );
};

export default ErrorComponent;
