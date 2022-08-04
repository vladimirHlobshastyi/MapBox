import React from "react";
import style from "./Tag.module.css";

const Tag = ({ color, text }) => {
  return (
    <div className={style.TagContainer}>
      <div className={`${style.Square} ${style[color]}`} />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
