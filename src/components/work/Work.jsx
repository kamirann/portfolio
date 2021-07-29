import React from "react";
import WORK_DATA from "./workData";
import { FlexItems, SectionHeading, SectionSubHeading } from "./WorkStyles";
import WorkItem from "./WorkItem";

const Work = () => {
  return (
    <div className="container">
      <FlexItems>
        <SectionHeading>My Work</SectionHeading>
        <SectionSubHeading>What i love to do</SectionSubHeading>
        {WORK_DATA.map((work, idx) => {
          return (
            <WorkItem even={idx % 2 === 0 ? true : false} key={idx} {...work} />
          );
        })}
      </FlexItems>
    </div>
  );
};

export default Work;
