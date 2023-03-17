import React from "react";
import { Link } from "react-router-dom";
import classes from '../styles/videoCard.module.css';
import { demoChannelUrl, demoThumbnailUrl } from "../utils/constants";
const VideoCard = ({ thumbnail, videoTitle, channelTitle, videoId,channelId,description }) => {

    return <div className={classes.videoCard}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <img className={classes.thumbnail} src={thumbnail == false ? demoThumbnailUrl : thumbnail} />
        </Link>
        <div className={classes.info}>
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
                <span className={classes.caption}>{videoTitle}</span>
            </Link>
            <Link to={channelId ? `/channel/:${channelId}`: {demoChannelUrl}}><span className={classes.channelName}>{channelTitle}</span></Link>
        </div>
        
    </div>
}


export default VideoCard;