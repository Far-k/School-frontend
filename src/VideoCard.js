import React from "react";
import "./VideoCard.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function VideoCard({ content, deletedCont, handlelikes}) {
const [likes, setLikes] = useState(content.likes);
const history = useHistory()
// let course
// content.map(content => {
//   return  course = content.course_id
// })
 

const handleDelete = (id) => {
  console.log(id)
  deletedCont(id)
}

const handleLikes = (content) => {
  setLikes(likes+1)
  handlelikes(content)
}

if (content.likes === null) {

  content.likes = 0

} 
const handleClick = (content) => {
let path = `/video/${content.id}`

history.push({pathname: path, state: {content: content}})
}



//<iframe width="420" height="315" src="https://www.youtube.com/embed/A6XUVjK9W4o" frameborder="0" allowfullscreen></iframe>

  return (
    <div className="videoCard" >
    
      <div className="videoCard_text" >
        <h2 onClick={()=>handleClick(content)} >{content.title}</h2>
      <div className="videoCard_info">
          <iframe className="content" height="100%" width="100%"  src={content.content_type} frameBorder="0" alt="" title="bob"></iframe>
      </div>
          <button onClick={()=>handleDelete(content.id)}> DELETE</button>
          <button onClick={()=>handleLikes(content)}> Likes</button>
          <p>{likes}</p>
  
 
      </div>



    

    </div>
  );
}

export default VideoCard;
