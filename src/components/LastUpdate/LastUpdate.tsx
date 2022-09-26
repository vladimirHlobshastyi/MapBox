import React, { FC } from 'react';
import style from './LastUpdate.module.css';
import { LastUpdatePropTypes } from './LastUpdate.types';
import actualDate from '../../utils/actualDate/actualDate';

const LastUpdate: FC<LastUpdatePropTypes> = ({ date }) => {
  return (
    <div className={style.Container}>
      <div>
        Останнє оновлення:
        <strong>{!date ? 'Оновлюється...' : actualDate(date, false)}</strong>
      </div>
    </div>
  );
};

export default React.memo(LastUpdate);
