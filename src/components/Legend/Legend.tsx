import React, { useContext, useEffect } from 'react';
import { EventsContext } from '../../providers/AlertProvider';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import style from './Legend.module.css';

const Legend = () => {
  const { timerValue, isLoading } = useContext(EventsContext) || {};
  const { updateAlerts } = useContext(EventsContext);

  function notifyMe() {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification('Vibration Sample', {
        body: 'Buzz! Buzz!',
        data: 'ALARM!',
        badge: './../Info/png/special_military_equip.png',
        icon: './../Info/png/special_military_equip.png',
        image: './../Info/png/special_military_equip.png',
        vibrate: [100, 50, 100, 100, 50],
        tag: `${new Date()}`,
      });

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          // The tab has become visible so clear the now-stale Notification.
          notification.close();
        }
      });
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          /*  const notification = Notification.requestPermission((result) => {
            if (result === 'granted') {
              navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification('Vibration Sample', {
                  body: 'Buzz! Buzz!',
                  data: 'ALARM!',
                  badge: './../Info/png/special_military_equip.png',
                  icon: './../Info/png/special_military_equip.png',
                  image: './../Info/png/special_military_equip.png',
                  vibrate: [100, 50, 100, 100, 50],
                  tag: `${new Date()}`,
                });
              });
            }
          }); */

          const notification = new Notification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            data: 'ALARM!',
            badge: './../Info/png/special_military_equip.png',
            icon: './../Info/png/special_military_equip.png',
            image: './../Info/png/special_military_equip.png',
            vibrate: [100, 50, 100, 100, 50],
            tag: `${new Date()}`,
          });

          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              // The tab has become visible so clear the now-stale Notification.
              notification.close();
            }
          });
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
  useEffect(() => {
    setInterval(() => {
      notifyMe();
    }, 4000);
  }, []);
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
