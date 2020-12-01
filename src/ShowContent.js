import React from 'react'
import { useLocation } from 'react-router-dom';

function ShowContent() {
 const location = useLocation();
    const mycontent = location.state.content
    console.log(mycontent)

   
    return (
        <div>
            
    {/* <h1>{mycontent.title}</h1>
    <div className="videoCard_info">
          <iframe className="content" height="100%" width="100%"  src={mycontent.content_type} frameBorder="0" alt="" title="bob"></iframe>
      </div> */}
        </div>
    )
}

export default ShowContent
