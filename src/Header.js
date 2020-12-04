import React from 'react'
import  { useState } from 'react'
import './Header.css'
//import MenuIcon from '@material-ui/icons/Menu'
//import SearchIcon from '@material-ui/icons/Search'
// import VideoCallIcon from '@material-ui/icons/VideoCall'
//import AppsIcon from '@material-ui/icons/Apps'
// import NotificationsIcon from '@material-ui/icons/Notifications'
//import Avatar from '@material-ui/core/Avatar'
import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core'


function Header({handleLogout}) {
    const history = useHistory()
    const handleSession = () => {
        handleLogout()
    }
    const goHome = () => {
        let path = '/home'
      history.push(path)
    }
    return (
        <div className="header">
            <div className="header_left">
            <h1 onClick={goHome}>Freelearners</h1>

            <Button onClick={handleSession}>Log Out</Button>
            </div>  
            
        </div>
    )
}

export default Header
