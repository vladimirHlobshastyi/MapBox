import React, { FC } from 'react';
import useScreenshot from '../../hooks/useScreencshot';
import style from './Button.module.css';
import { ButtonPropsTypes } from './Button.types';
import screenshot from './screenshot.png';
import screenshotForStatistic from './screenshotForStatistic.png';

const Button: FC<ButtonPropsTypes> = ({ refProp, isStatistic }) => {
  return (
    <div
      className={isStatistic ? style.ContainerStatistic : style.ContainerMap}
      onClick={useScreenshot(refProp,isStatistic)}
    >
      <img
        src={isStatistic ? screenshotForStatistic : screenshot}
        alt="Button"
      />
    </div>
  );
};

export default Button;
