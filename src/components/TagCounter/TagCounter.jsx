import React from "react";
import CountComponent from "../CountComponent/CountComponent";
import style from "./TagCounter.module.css";

const TagCounter = () => {
  return (
    <div className={style.TagCounterContainer}>
      <span>
        Information was updated
        {<CountComponent />}
        seconds ago
      </span>
    </div>
  );
};

export default TagCounter;
