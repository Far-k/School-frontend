import React from 'react'
import { useLocation } from 'react-router-dom';
import './ShowContent.css'

function ShowContent() {
 const location = useLocation();
    const mycontent = location.state.content
    console.log(mycontent)

   
    return (
        <div className="show_card">
        <h1>{mycontent.title}</h1>
        <div className="videoCard_info">
          <img className="Study Materials" src={mycontent.material}  alt="" ></img>
      </div>
        </div>
    )
}

export default ShowContent
