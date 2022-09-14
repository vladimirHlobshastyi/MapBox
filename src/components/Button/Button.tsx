import React, { FC } from 'react';
import useScreenshot from '../../hooks/useScreencshot';
import style from './Button.module.css';
import { ButtonPropsTypes } from './Button.types';
import screenshot from './screenshot.png';

const Button: FC<ButtonPropsTypes> = ({ refProp, date }) => {
  return (
    <div className={style.Container} onClick={useScreenshot(refProp, date)}>
      <img src={screenshot} alt="Button" />
    </div>
  );
};

export default Button;
