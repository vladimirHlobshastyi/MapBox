import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="loaderWrapper">
        <div className="text">Зачекайте...</div>
        <div className={'lds-ring'}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
