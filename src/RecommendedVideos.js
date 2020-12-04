import React from 'react';
import './Recommendedvideos.css';
import VideoCard from './VideoCard'

function RecommendedVideos({contents, deletedCont, handlelikes, currentContent,SavedContents}) {
   console.log(contents)
   
console.log(currentContent)
   const displayContent = currentContent.map( content => {
    return (
    content.contents
    )
   })

   console.table(displayContent)
   let object 
   console.log(displayContent.map(obj => {
    return object = obj
   }))
   console.log(object)
   
    return (
        <div className="recommendedVidÍeos">
            <h2>FlashCards</h2>
            <div className="recommendedVideos_videos">
                {object? object.map(content => {
                return <VideoCard content={content} deletedCont={deletedCont} handlelikes={handlelikes} SavedContents={SavedContents}/>
                }): null} 
            </div>
        </div>
    )
}

export default RecommendedVideos
