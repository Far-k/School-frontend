import React, { useState } from "react";
import { Button } from "@material-ui/core";

function Courses({ subject, handleBtn }) {
    const [currentCourse, setCurrentCourse] = useState('test')


    subject.courses.map( course => {
       return  console.log(course)
    })

    
    // const handleClick = (e) => {
        
    //     console.log(e.target.name)
    //     setCurrentCourse(e.target.name)
        
        
    // }
    
    return (
        <div>
        {console.log(currentCourse)}
       
            {subject.courses.map((course) => {
                return (
                    <Button
                    type="button"
                    name={course.name}
                    value={currentCourse}
                    onClick={() => handleBtn(course.name)}

                    > 
                    {course.name}
                    </Button>
                );
            })}
    

        </div>
    );
}

export default Courses;
