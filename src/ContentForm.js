import React, { useState } from "react";
import "./FormStyle.css";
import { Button } from "@material-ui/core";

function ContentForm({ createContent }) {
  //const instructor = JSON.parse(localStorage.getItem('userInfo'))
  const [hover, sethover] = useState(false);

  const [content, setContent] = useState({
    course_id: 1,
    instructor_id: 1,
    content_type: "",
    material: "",
    title: "",
    likes: 0,
    level: 0
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
    console.log(content);
  };
  console.log(content);
  const handleSubmit = (e) => {
    e.preventDefault();
    createContent(content);
    console.log(content);
  };

  const handleHover = () => {
      sethover(!hover)
  }
  return (
    <div className="form_style">
      <h1 onClick={handleHover}>ADD CARDS</h1>
      {hover ? (
        <form onSubmit={handleSubmit}>
          <input placeholder="Title" name="title" onChange={handleChange} />
          <input
            placeholder="Pdf File"
            name="content_type"
            onChange={handleChange}
          />
          <input
            placeholder="Url Link"
            name="material"
            onChange={handleChange}
          />
          <input
            placeholder="Subject"
            name="course_id"
            
    
          />
          <Button variant="outlined" className="button" type='submit'>Submit</Button>
        </form>
      ) : null}
    </div>
  );
}

export default ContentForm;
