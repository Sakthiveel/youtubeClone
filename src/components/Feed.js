import React from 'react';
import SideBar from './Sidebar';
import VideosSection from  './VideosSection';
import classes from "../styles/feed.module.css";

const Feed = () =>{
    return <div className={classes.feed}><SideBar/><VideosSection/></div>

}


export default Feed;