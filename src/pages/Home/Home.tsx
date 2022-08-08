import React from 'react';
import style from './Home.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AlertsMap } from '../AlarmsMap/AlertsMap';
import { Helmet } from 'react-helmet';

const Home = (): JSX.Element => {
  return (
    <div className={style.HomeContainer}>
      <Helmet>
        <title>Карта повітряних тривог України</title>
        <meta
          name="description"
          content="Перевірка інформації про мапу повітряних тривог в Україні. Дізнатися, у якому регіоні оголошено про повітряну тривогу, і перегляньте актуальну інформацію про небезпеку"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <AlertsMap />
    </div>
  );
};

export default Home;
