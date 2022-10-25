
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocation } from '../api/getLocation';
import { EventsContext } from './AlertProvider';
import { ChildrenPropTypes } from './AlertProvider.types';

export const NotificationContext = createContext({});

const NotificationProvider = ({ children }: ChildrenPropTypes) => {
  const [userPosition, setUserPosition] = useState<{
    lat: number,
    lng: number,
  }>({}as {
    lat: number,
    lng: number,
  });
  const [region, setRegion] = useState< string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isAlertInRegion, setIsAlertInRegion] = useState<boolean>(false);
  const { alerts} = useContext(EventsContext);
  
  const fetchUserPosition =async ()=>{
    try {
        if (errorMessage) {
          setErrorMessage('');
        }
  
        setIsLoading(true);
  
        const data = await getLocation(userPosition.lat,userPosition.lng);
  const textOblast:string = await data?.features[0].text
        if (textOblast&&alerts.length!==0) {
            setRegion(textOblast);
            
            let test =  alerts?.find((it)=>it.name_en.toLocaleLowerCase()===textOblast.toLocaleLowerCase()? setIsAlertInRegion(it.alert):it)
                
             return test
        }
  
        setIsLoading(false);
  
      } catch (err) { if (err instanceof Error) {
     
        setErrorMessage(err.message);
        setIsLoading(false);
      } else {
        console.log('Unexpected error', err);
      }
  
      }
  }
  const geolocation = () =>
    navigator.geolocation.getCurrentPosition(function (position) {
      const userGeoposition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserPosition(userGeoposition);
    });

  function notifyMe(alerts: boolean) {
    const isAlert = () =>
      alerts ? 'Повітряна тривога!' : 'Відбій повітряної тривоги!';

    const notificationMess = navigator.serviceWorker.ready.then(
      (registration) => {
        registration.showNotification(isAlert(), {
          body: 'denied',
          data: 'ALARM!',
          badge:
            './../../../public/imgonline-com-ua-Resize-tJPM6IaphKO8HKj.jpg',
          /*  icon: 'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg', */
          vibrate: [200, 100, 20],
          requireInteraction: false,
        });
      }
    );

    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      geolocation();
      return notificationMess;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          geolocation();
          return notificationMess;
        }
      });
    }
  }

  useEffect(() => {
    geolocation();
   
  }, []);

  useEffect(() => {

    if (!region?.length && !isLoading) {
        fetchUserPosition();
    }
  }, [region, isLoading]);

  useEffect(() => { notifyMe(isAlertInRegion)}, [isAlertInRegion]);

  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
