import React from 'react';
import style from './Tag.module.css';

type tagProps = { color: string, text: string };

const Tag = ({ color, text }: tagProps) => {
  return (
    <div className={style.TagContainer}>
      <div className={`${style.Square} ${style[color]}`} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
