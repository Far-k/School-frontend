import React from 'react'
import SubjectCard from './SubjectCard'

function SubjectContainer({subject, courses, filterSubject}) {
    return (
      
        <div className="subject">
           {subject.map(subject => {
             return   <SubjectCard subject={subject} courses={courses}  filterSubject={filterSubject}/>
           })}
        </div>
    )
}

export default SubjectContainer
