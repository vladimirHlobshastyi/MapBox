import React, { useContext } from 'react';
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
      const notification = new Notification('Hi there!', {
        data: 'Hi there granted!',
        vibrate: [50, 10, 50],
      });
      debugger;
      return notification;
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification('Hi there!', {
            data: 'Hi there! !denied',
            vibrate: [50, 10, 50],
          });
          debugger;
          return notification;
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
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
