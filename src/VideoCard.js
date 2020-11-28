import React from "react";
import "./VideoCard.css";

function VideoCard({ content, deletedCont, newLikes}) {

// let course
// content.map(content => {
//   return  course = content.course_id
// })

// console.log(course)
const handleDelete = (id) => {
  deletedCont(id)
}
const handleLikes = (content) => {
  newLikes(content)
}

if (content.likes === null) {
  
  content.likes = 0

} 

  return (
    <div className="videoCard">
    
      <div className="videoCard_info">
          <iframe className="content" height="100%" width="100%"  src="https://www.youtube.com/watch?v=NhK4kGdio6E" alt="" title="bob"/>
      </div>

      <div className="videoCard_text">
          <h3>we the title now</h3>
          <button onClick={()=>handleDelete(content.id)}> DELETE</button>
          <button onClick={()=>handleLikes(content)}> Likes</button>
          <p>{content.likes}</p>
  
      </div>
    </div>
  );
}

export default VideoCard;
