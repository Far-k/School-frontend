import React from 'react';
import './Recommendedvideos.css';
import VideoCard from './VideoCard'

function RecommendedVideos({contents, deletedCont, newLikes}) {
   console.log(contents)
    return (
        <div className="recommendedVidÍeos">
            <h2>Available Courses</h2>
            <div className="recommendedVideos_videos">
                {contents? contents.map(content => {
                return <VideoCard content={content} deletedCont={deletedCont} newLikes={newLikes}/>
                }): null} 
               
            
            </div>

        </div>
    )
}

export default RecommendedVideos
