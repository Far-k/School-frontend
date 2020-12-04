import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NewSearch.css'


function NewSearch({searched}) {
    const [inputSearch, setInputSearch] = useState("");
    
    searched(inputSearch)

    return (
        <div className="header_input">
        <input className="header_search" onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search Subject" type="text" />
        
        <Link to={`/search/${inputSearch}`}>
        {/* <SearchIcon className="header_inputButton"/> */}
        </Link>
       
        </div>
    )
}

export default NewSearch
