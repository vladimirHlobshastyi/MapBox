import React, { useContext } from 'react';
import style from './Home.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import AlertsMap from '../AlarmsMap/AlertsMap';
import { Helmet } from 'react-helmet';
import { EventsContext } from '../../providers/AlertProvider';
import Loader from '../../components/Loader/Loader';
import ErrorBoundary from '../../utils/ErrorBoundary/ErrorBoundary';

const ButtonComponent = () => {
  throw Error('error!');
  return <></>;
};

const Home = () /*: JSX.Element */ => {
  const context = useContext(EventsContext);

  /*   if (context?.lastUpdate === undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }
 */
  const myErrorHandler = (error, info) => {
    // Сделайте что-нибудь с ошибкой
    // Например, запишите сюда клиент регистрации ошибок
  };
  const ErrorFallback = () => {
    return <div>ERRRRRRROR</div>;
  };
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
