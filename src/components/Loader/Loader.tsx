import React from 'react';
import './Loader.css';
import spiner from './../../svg/Spinner-361px.svg';

const Loader: () => JSX.Element = () => {
  return (
    <div className="loader">
      <img src={spiner} alt="Loading" />
    </div>
  );
};

export default Loader;
