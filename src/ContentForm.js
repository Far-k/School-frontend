import React, { useState } from 'react'

function ContentForm({createContent}) {
//const instructor = JSON.parse(localStorage.getItem('userInfo'))


    const [ content, setContent ] = useState({
        course_id: 1,
        instructor_id: 1,
        content_type:"",
        material: "",
        title: "",
        likes: 0,
        level: 0
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
                    <input placeholder="title" name="title"  onChange={handleChange} />
                    <input placeholder="content-type" name="content_type"  onChange={handleChange} />
                    <input placeholder="material" name="material"  onChange={handleChange} />
                    <input placeholder="level" type="number" name="level"  onChange={handleChange} />
                    <button>Submit</button>
                </form>
        </div>
    )
}

export default ContentForm
