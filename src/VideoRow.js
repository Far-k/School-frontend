import React from 'react'
import './VideoRow.css';

function VideoRow({description, image, title}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow_text">
            <h3>{title}</h3>
            <p className="videoRow_headline">{}</p>
            <p className="videoRow_description">{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
