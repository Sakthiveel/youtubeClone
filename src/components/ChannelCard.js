import React from "react";
import { Link } from "react-router-dom";
import classes from '../styles/channelCard.module.css';
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ thumbnail: url, channelTitle }) => {
    console.log(url);
    return <div className={classes.channelCard}>
        <img className={classes.channelPhoto} src={!url ? demoProfilePicture : url} alt="channel_Image" />
        <Link><span className={classes.channelName}>{channelTitle}</span>
        </Link>
        <span>Subscriber Count</span>
    </div>
}

  export default ChannelCard;