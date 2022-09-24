import React, { FC } from 'react';
import useScreenshot from '../../hooks/useScreencshot';
import style from './Button.module.css';
import { ButtonPropsTypes } from './Button.types';
import screenshot from './screenshot.png';
import screenshotForStatistic from './screenshotForStatistic.png';

const Button: FC<ButtonPropsTypes> = ({ refProp, isStatistic }) => {
  return (
    <div
      className={isStatistic ? style.Container2 : style.Container}
      onClick={useScreenshot(refProp)}
    >
      <img
        src={isStatistic ? screenshotForStatistic : screenshot}
        alt="Button"
      />
    </div>
  );
};

export default Button;
