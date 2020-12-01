import React, { useState } from "react";
import SubjectIcon from "@material-ui/icons/Subject";
import SideItemRow from "./SideItemRow";
import "./SideItem.css";
import SubjectContainer from "./SubjectContainer";
import { IconButton } from "@material-ui/core";

function SideItems({ courses, subject,filterSubject,currentSearch }) {
  const [show, setShow] = useState(false);
  return (

    <div className="sideItem">
      <IconButton onClick={() => setShow(!show)}>
        <SideItemRow selected Icon={SubjectIcon} title="Subjects"  />
      </IconButton>
      {show ?  <SubjectContainer subject={subject} courses={courses} currentSearch={currentSearch} filterSubject={filterSubject} /> : null}

      <hr />
    </div>
  );
}
export default SideItems;
