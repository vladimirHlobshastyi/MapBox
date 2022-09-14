import React, { FC } from 'react';
import style from './LastUpdate.module.css';
import { LastUpdatePropTypes } from './LastUpdate.types';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import actualDate from '../../utils/actualDate/actualDate';

dayjs.extend(localizedFormat);

const LastUpdate: FC<LastUpdatePropTypes> = ({ date }) => {
  debugger;
  return (
    <div className={style.Container}>
      <div>
        Останнє оновлення:
        <strong>
          {date === undefined ? 'Оновлюється...' : actualDate(date, false)}
        </strong>
      </div>
    </div>
  );
};

export default React.memo(LastUpdate);
