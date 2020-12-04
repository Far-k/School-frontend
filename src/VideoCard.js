import React from "react";
import "./VideoCard.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Pdf from "./Pdf";

import { Button } from "@material-ui/core";


function VideoCard({ content, deletedCont, handlelikes,SavedContents}) {
const [likes, setLikes] = useState(content.likes);
const [type, settype] = useState(false)
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

const handleSave = (content) => {
  SavedContents(content)
}


 
 
 


  return (
    <div className="videoCard">
    
      <div className="videoCard_text">
        <h2 onClick={()=>handleClick(content)} >{content.title}</h2>
      
      <div className="videoCard_info">
           <Pdf content={content.material}  /> 
      </div>
      <br/>
          {/* <Button onClick={()=>handleDelete(content.id)}> DELETE</Button>  */}
            <Button onClick={()=>handleLikes(content)}> Likes</Button> 
           {/* <Button onClick={()=>handleSave(content)}> My Stuff</Button>  */}
          <p>{likes}</p>
  
 
      </div>



    

    </div>
  );
  }

export default VideoCard;
