import React from 'react'
import './SideItemRow.css';

function SideItemRow({selected, Icon, title}) {
    return (
        <div className={`sideItemRow ${selected && "selected"}`}>
        <Icon className={"sideItemRow_icon"}/>
        <h1 className="sideItemRow_title">{title}</h1>
        </div>
    )
}

export default SideItemRow
