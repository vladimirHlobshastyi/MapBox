
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocation } from '../api/getLocation';
import { EventsContext } from './AlertProvider';
import { ChildrenPropTypes } from './AlertProvider.types';
import { userPositionType } from './NotificationProvider.types';


export const NotificationContext = createContext({});


const NotificationProvider = ({ children }: ChildrenPropTypes) => {
  const [userPosition, setUserPosition] = useState<userPositionType>({} as userPositionType);
  const [region, setRegion] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isAlertInRegion, setIsAlertInRegion] = useState<boolean>(false);
  const { alerts } = useContext(EventsContext);

  const fetchUserPosition = async () => {
    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      setIsLoading(true);

      const data = await getLocation(userPosition.lat, userPosition.lng);

      const userRegion: string = await data?.features[0].text
      if (userRegion && alerts.length !== 0) {
        setRegion(userRegion);

        const isAlertInUserRegion = alerts?.find((it) => it.name_en.toLocaleLowerCase() === userRegion.toLocaleLowerCase() ? setIsAlertInRegion(it.alert) : it)

        return isAlertInUserRegion
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

  const getGeolocation = () =>
    navigator.geolocation.getCurrentPosition(function (position) {
      const userGeoposition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserPosition(userGeoposition);
    });

  function createNotification(alerts: boolean) {
    const isAlert = () =>
      alerts ? 'Повітряна тривога!' : 'Відбій повітряної тривоги!';

    const notificationMess = navigator.serviceWorker.ready.then(
      (registration) => {
        registration.showNotification(isAlert(), {
          body: alerts ? 'У вашому регіоні оголошена повітряна тривога!' : 'У вашому регіоні відмінена повітряна тривога!',
          badge: './logo192.png',
          icon: alerts ? './red.png' : './green.png',
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
      fetchUserPosition();
    }
  }, [region, isLoading]);

  useEffect(() => { createNotification(isAlertInRegion) }, [isAlertInRegion]);


  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
