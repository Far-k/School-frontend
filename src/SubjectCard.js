import React, { useState } from 'react'
import "./SubjectCard.css"
import Courses from './Courses'

function SubjectCard({subject, courses, filterSubject}) {
const [show, setShow] = useState(false)
const [course, setCourse] = useState("")

    const name = courses.map(course => {
        return course.name
    })

    const handleClick = () => {

        const bool = !show
        setShow(bool)

    }

    const handleBtn = (course) => {
        setCourse(course)
        filterSubject(course)
        const bool = !show
        setShow(bool)
    }
 
    return (

        <div className = "subject__card" >
            <h2 onClick={handleClick}>{subject.name}</h2>
            {show?  <Courses subject={subject} handleBtn={handleBtn}/> : null}
           
        </div>

    )
}

export default SubjectCard
