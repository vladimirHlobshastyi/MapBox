
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getLocation } from '../api/getLocation';
import { Alert } from '../commonTypes/alert';
import useInterval from '../hooks/useInterval';
import { EventsContext } from './AlertProvider';
import { ChildrenPropTypes } from './AlertProvider.types';
import { userPositionType } from './NotificationProvider.types';


export const NotificationContext = createContext({});


const NotificationProvider = ({ children }: ChildrenPropTypes) => {
  const [userPosition, setUserPosition] = useState<userPositionType>({} as userPositionType);
  const [region, setRegion] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isAlertInRegion, setIsAlertInRegion] = useState<boolean | 'panding'>('panding');
  const [whenDidAlertChange, setWhenDidAlertChange] = useState<string | 'panding'>('panding');
  const { alerts } = useContext(EventsContext);

  const [alertsMoc, setAlertsMoc] = useState([{ id: 15, name: "Полтавська область", name_en: "Poltava oblast", alert: false, changed: "2022-11-01T10:40:43+02:00" }, { id: 17, name: "Полтавс", name_en: "s", alert: true, changed: "2022-11-0d10:40:43+02:00" }]);
  const [timerValue, setTimerValue] = useState<number>(20);

  useInterval(() => {

    if (timerValue > 1) {
      setTimerValue(old => old - 1);
    } else {
      setAlertsMoc([{ id: 15, name: "Полтавська область", name_en: "Poltava oblast", alert: !alertsMoc[0].alert, changed: `2022-11-01T10:40:43+02:${Math.random()}` }, { id: 17, name: "Полтавс", name_en: "s", alert: true, changed: "2022-11-0d10:40:43+02:00" }])
      setTimerValue(20);
    }

  }, timerValue >= 1);
  const getGeolocation = () => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(function (position) {
      const userGeoposition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserPosition(userGeoposition);
    })
    setIsLoading(false)
  };

  const fetchUserPosition = async (alertsProp: Array<Alert>) => {
    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      setIsLoading(true);

      const data = await getLocation(userPosition.lat, userPosition.lng);

      const userRegion: string = await data?.features[0].text
      if (userRegion && alertsProp.length !== 0) {
        setRegion(userRegion);

        alertsProp?.forEach((it) => {
          if (it.name_en.toLocaleLowerCase() === userRegion.toLocaleLowerCase()) {
            setIsAlertInRegion(it.alert)
            setWhenDidAlertChange(it.changed)
          }
        })

      }

      setIsLoading(false);

    } catch (err) {
      if (err instanceof Error) {

        setErrorMessage(err.message);
        setIsLoading(false);
      } else {
        console.log('Unexpected error', err);
      }

    }
  }

  const fetchUserPositionMemo = useCallback(() => { fetchUserPosition(/* alerts */alertsMoc) }, [alertsMoc/* alerts */])


  function createNotification() {
    const isAlert = () =>
      isAlertInRegion ? 'Повітряна тривога!' : 'Відбій повітряної тривоги!';

    const notificationMess = navigator.serviceWorker.ready.then(
      (registration) => {
        registration.showNotification(isAlert(), {
          body: isAlertInRegion ? 'У вашому регіоні оголошена повітряна тривога!' : 'У вашому регіоні відмінена повітряна тривога!',
          badge: './logo192.png',
          icon: './logo192.png',
          vibrate: 500,
          requireInteraction: false,
          renotify: true,
          tag: 'notification'

        });
      }
    );

    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      getGeolocation();
      return notificationMess;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          getGeolocation();
          return notificationMess;
        }
      });
    }
  }

  useEffect(() => {
    getGeolocation();

  }, []);

  useEffect(() => {

    if (!region?.length && !isLoading) {
      getGeolocation();
      fetchUserPositionMemo()
    }
  }, [region, isLoading]);

  useEffect(() => {

    if (whenDidAlertChange !== 'panding') {

      createNotification()
    }
  }, [whenDidAlertChange]);


  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
