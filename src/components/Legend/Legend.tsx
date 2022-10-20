import React, { useContext, useEffect } from 'react';
import { EventsContext } from '../../providers/AlertProvider';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import style from './Legend.module.css';

const Legend = () => {
  const { timerValue, isLoading } = useContext(EventsContext) || {};
  const { updateAlerts } = useContext(EventsContext);

  function notifyMe() {
    /*    const notificationMess = new Notification('Vibration Sample', {
      body: 'Buzz! Buzz!',
      data: 'ALARM!',
      badge: './../Info/png/special_military_equip.png',
      icon: './../Info/png/special_military_equip.png',
      image: './../Info/png/special_military_equip.png',
      vibrate: [100, 50, 100, 100, 50],
    }); */
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = Notification.requestPermission((result) => {
        if (result === 'granted') {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('Vibration Sample', {
              body: 'granted',
              data: 'ALARM!',
              badge:
                'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
              icon: 'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
              image:
                'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
              vibrate: [200, 100, 20],
              requireInteraction: true,
            });
          });
        }
      });
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = Notification.requestPermission((result) => {
            if (result === 'granted') {
              navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification('Vibration Sample', {
                  body: 'denied',
                  data: 'ALARM!',
                  badge:
                    'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
                  icon: 'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
                  image:
                    'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
                  vibrate: [200, 100, 20],
                  requireInteraction: true,
                });
              });
            }
          });
        }
      });
    }
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
  useEffect(() => {
    if (timerValue === 5) {
      notifyMe();
    }
  }, [timerValue]);

  return (
    <div className={style.Legend} onClick={/* updateAlerts */ notifyMe}>
      <Tag color={'red'} text={'Тривога в регіоні'} />
      <Tag color={'grey'} text={'Тривога відсутня'} />

      <div className={style.RefreshMessage}>
        <Counter value={timerValue} isLoading={!!isLoading} />
      </div>
    </div>
  );
};

export default Legend;
