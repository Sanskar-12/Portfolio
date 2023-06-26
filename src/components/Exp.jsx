import React from "react";
import data from "../assets/data.json";
import TimelineItem from "./TimelineItem";

const Exp = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Exp;
