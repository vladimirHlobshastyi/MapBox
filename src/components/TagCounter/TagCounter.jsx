import React from "react";
import CountComponent from "../CountComponent/CountComponent";
import style from "./TagCounter.module.css";

const TagCounter = ({ onChange }) => {
  return (
    <div className={style.TagCounterContainer}>
      <span>
        Інфорація оновилась
        {<CountComponent onChange={onChange} />}
        секунд тому
      </span>
    </div>
  );
};

export default TagCounter;
