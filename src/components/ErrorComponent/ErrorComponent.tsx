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
        <span>Проводяться технічні роботи</span>
      ) : (
        <span>Нема зв'язку з інтернетом...</span>
      )}
    </div>
  );
};

export default ErrorComponent;
