import React from "react";
import style from "./Tag.module.css";

const Tag = ({ Tagcolor, text }) => {
  let colorClass = Tagcolor === "red" ? style.red : style.green;

  return (
    <div className={style.TagContainer}>
      <div className={style.Square + " " + colorClass}></div>
      <span>{text} </span>
    </div>
  );
};

export default Tag;
