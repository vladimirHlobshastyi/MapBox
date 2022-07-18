import React from "react";
import CountComponent from "../CountComponent/CountComponent";
import style from "./TagCounter.module.css";

const TagCounter = ({ onChange }) => {
  return (
    <div className={style.TagCounterContainer}>
      <span>
        Information was updated
        {<CountComponent onChange={onChange} />}
        seconds ago
      </span>
    </div>
  );
};

export default TagCounter;
