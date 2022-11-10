import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocation } from '../api/getLocation';
import { Alert } from '../commonTypes/alert';
import { EventsContext } from './AlertProvider';
import { ChildrenPropTypes } from './AlertProvider.types';
import { userPositionType } from './NotificationProvider.types';


export const NotificationContext = createContext({});

const NotificationProvider = ({ children }: ChildrenPropTypes) => {
  const [userPosition, setUserPosition] = useState<userPositionType | 'panding'>('panding');
  const [region, setRegion] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isAlertInRegion, setIsAlertInRegion] = useState<boolean | 'panding'>('panding');
  const [whenDidAlertChange, setWhenDidAlertChange] = useState<string | 'panding'>('panding');
  const { alerts } = useContext(EventsContext);



  const getGeolocation = () =>
    navigator.geolocation.getCurrentPosition(function (position) {
      const userGeoposition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserPosition(userGeoposition);

    });

  const getRegionFunc = async () => {
    if (userPosition !== 'panding') {
      const data = await getLocation(userPosition.lat, userPosition.lng);

      const userRegion: string = await data?.features[0].text
      if (userRegion) {

        setRegion(userRegion);

      }
    }
  }

  const fetchUserPosition = async (alertsProp: Array<Alert>) => {

    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      if (region !== '') {
        alertsProp?.forEach((it) => {

          if (it.name_en.toLocaleLowerCase() === region.toLocaleLowerCase()) {
            setIsAlertInRegion(it.alert)
            setWhenDidAlertChange(it.changed)
          }
        })
      }

    } catch (err) {
      if (err instanceof Error) {

        setErrorMessage(err.message);
      } else {
        console.log('Unexpected error', err);
      }

    }
  }

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
      getRegionFunc()
      return notificationMess;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          getGeolocation();
          getRegionFunc()
          return notificationMess;
        }
      });
    }
  }

  useEffect(() => {

    getGeolocation();

  }, []);


  useEffect(() => {

    getRegionFunc()

  }, [userPosition]);



  useEffect(() => {

    if (region?.length > 1) {

      fetchUserPosition(alerts)

    }
  }, [region, alerts]);

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
