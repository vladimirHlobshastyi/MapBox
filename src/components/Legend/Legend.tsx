import React, { useContext, useEffect } from 'react';
import { EventsContext } from '../../providers/AlertProvider';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import style from './Legend.module.css';

const Legend = () => {
  const { timerValue, isLoading } = useContext(EventsContext) || {};
  const { updateAlerts } = useContext(EventsContext);

  function notifyMe(alerts: boolean) {
    const isAlert = () =>
      alerts ? 'Повітряна тривога!' : 'Відбій повітряної тривоги!';

    const notificationMess = navigator.serviceWorker.ready.then(
      (registration) => {
        registration.showNotification(isAlert(), {
          body: 'denied',
          data: 'ALARM!',
          badge: './../../../public/imgonline-com-ua-Resize-Kin1OMKRod7.png',
          icon: 'https://assets.transloadit.com/assets/demos/outputs/deduped-838e1c25bfac41265615c8badff2e7aa.jpg__preview.jpg',
          vibrate: [200, 100, 20],
          requireInteraction: false,
        });
      }
    );

    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      return notificationMess;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          return notificationMess;
        }
      });
    }
  }

  useEffect(() => {
    if (timerValue === 5) {
      notifyMe(true);
    }
  }, [timerValue]);

  return (
    <div className={style.Legend} onClick={updateAlerts}>
      <Tag color={'red'} text={'Тривога в регіоні'} />
      <Tag color={'grey'} text={'Тривога відсутня'} />

      <div className={style.RefreshMessage}>
        <Counter value={timerValue} isLoading={!!isLoading} />
      </div>
    </div>
  );
};

export default Legend;
