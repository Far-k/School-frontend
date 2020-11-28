import React from 'react';
import './SubjectRow.css';
import { Avatar } from '@material-ui/core';

function SubjectRow({image, name, title}) {
    return (
        <div className="subjectRow">
            {/* <Avatar className="subjectRow_logo"
            alt={subject} src={image}/>
            <div className="subjectRow_text"></div>
            <h4>{Subject}</h4> */}
            {/* <p>{subject.name}</p>
            <p>{subject.title}</p> */}
            
        </div>
    )
}

export default SubjectRow
