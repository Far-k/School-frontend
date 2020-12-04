import React, { useState } from "react";
import SubjectIcon from "@material-ui/icons/Subject";

import "./SideItem.css";
import SubjectContainer from "./SubjectContainer";
import { IconButton } from "@material-ui/core";

function SideItems({ courses, subject, filterSubject, currentSearch }) {
  const [sub, setSubject] = useState(false);

  const showMyStuff = () => {
    setSubject(!sub);
  };
  return (
    <div className="subject__container">
      <h1 onClick={showMyStuff}>SUBJECTS</h1>
      {sub ? (
        <SubjectContainer
          subject={subject}
          courses={courses}
          currentSearch={currentSearch}
          filterSubject={filterSubject}
        />
      ) : null}
    </div>
  );
}
export default SideItems;
