import React from 'react';
import style from './IosLoader.module.css';
import logo from './logo512.png';

const IosLoader = () => {
  return (
    <div className={style.LoaderContainer}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.title}>
        <span>Карта повітрянних тривог України</span>
      </div>
    </div>
  );
};

export default IosLoader;
