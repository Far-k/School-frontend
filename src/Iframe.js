import React from 'react'

function Iframe({content}) {
    return (
        <div>
             <iframe className="content" height="100%" width="100%"  src={content} frameBorder="0" alt="" title="bob"></iframe>
        </div>
    )
}

export default Iframe
