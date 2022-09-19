import React from 'react';
import style from './Info.module.css';

const Info = ({}): JSX.Element => {
  return (
    <div className={style.Container}>
      <div className={style.Value}>5000</div>
      <div className={style.InfoContent}>
        <div className={style.InfoContentUa}>
          <span>{'броньованих машин'.toUpperCase()}</span>
        </div>
        <div className={style.InfoContentEn}>
          <span>armoured fighting vehicles</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
