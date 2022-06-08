import React from "react";
import style from "./Tag.module.css";

const Tag = ({ Tagcolor, text }) => {
  let colorClass = () => {
    if (Tagcolor === "red") {
      return style.red;
    } else if (Tagcolor === "green") {
      return style.green;
    } else {
      return style.grey;
    }
  };

  return (
    <div className={style.TagContainer}>
      <div className={style.Square + " " + colorClass()}></div>
      <span>{text} </span>
    </div>
  );
};

export default Tag;
