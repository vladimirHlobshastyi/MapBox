import React from 'react';
import style from './Tag.module.css';
import {TagPropsTypes} from "./Tag.types";


const Tag = ({ color, text }: TagPropsTypes) => {
  return (
    <div className={style.TagContainer}>
      <div className={`${style.Square} ${style[color]}`} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
