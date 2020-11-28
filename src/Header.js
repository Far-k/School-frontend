import React from 'react'
import  { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
// import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
// import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header_left">
            {/* <h1>This be the header</h1> */}
            <MenuIcon/>
            <Link to="/">
            <img className="header_logo"
            src='https://i.pinimg.com/originals/56/8c/f4/568cf452987a38c986c4a0ce3bbaf40a.jpg'
            alt=''
            />
            </Link>
            </div>
            <div className="header_input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header_inputButton"/>
            </Link>

            </div>
            <div className="header_icon">
            {/* <VideoCallIcon className="header_icon"/> */}
            <AppsIcon className="header_icon"/>
            {/* <NotificationsIcon className="header_icon"/> */}
            <Avatar 
            alt="pika-chu"
            src="https://assets.pokemon.com//assets/cms2-en-uk/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png"/>
            </div>
            
        </div>
    )
}

export default Header
