import React, { useState } from 'react'

function ContentForm({createContent}) {
//const instructor = JSON.parse(localStorage.getItem('userInfo'))


    const [ content, setContent ] = useState({
        course_id: 1,
        instructor_id: 1,
        content_type:"",
        material: ""
    });

    const handleChange = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        setContent({
            ...content,
            [e.target.name]: e.target.value
        });
        console.log(content);
    };
    console.log(content)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("");
        createContent(content);
    };
    return (
        <div>
             <form onSubmit={handleSubmit}>
                    <input placeholder="material" name="material"  onChange={handleChange} />
                    <input placeholder="content-type" name="content_type"  onChange={handleChange} />
                    <button>Submit</button>
                </form>
        </div>
    )
}

export default ContentForm
