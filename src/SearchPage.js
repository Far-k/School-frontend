import React from 'react';
import './SearchPage.css';
import SubjectRow from './SubjectRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import VideoRow from './VideoRow'

function SearchPage() {
    return (

        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon/>
            </div>
            <hr/>
            <SubjectRow
            image="https://lh3.googleusercontent.com/proxy/6KNmwV1-0z7uWtAZ9xUsX9JInUe1QY4yCDCuoMPzGwxA_rQG2vwwd03vbwzTxuT5Eqd_rlQKnem_iKZhgPcLfSo_"
            name="Mathematics"
            title="Basic Level"
            />
            <hr/>
            <VideoRow 
            description=""
            title=""
            image=""/>
        </div>
    )
}

export default SearchPage
