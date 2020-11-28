import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
// import WatchLaterIcon from '@material-ui/icons/WatchLater';
// import HistoryIcon from '@material-ui/icons/History';


function SideBar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            {/* <SidebarRow Icon="" title="Trending"/> */}

            
            <hr />
            <SidebarRow Icon={BookIcon} title="Library"/>
            {/* <SidebarRow Icon={WatchLaterIcon} title="WatchNext"/>
            <SidebarRow Icon={HistoryIcon} title="History"/> */}
            <hr />
            
            
        </div>
    )
}

export default SideBar
