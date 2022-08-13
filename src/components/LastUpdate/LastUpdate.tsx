import React from 'react';
import style from './LastUpdate.module.css';
import {LastUpdatePropTypes} from "./LastUpdate.types";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from "dayjs";

dayjs.extend(localizedFormat)

const LastUpdate = ({ date }: LastUpdatePropTypes) => {
  return (
    <div className={style.Container}>
      Останнє оновлення: <strong>{ dayjs(date).format('L LT') }</strong>
    </div>
  )
};

export default LastUpdate;
