import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import VideosContainer from "./VideosContainer";
import classes from '../styles/channelDetail.module.css';
import { useParams } from "react-router-dom";
import { fetchChannelData, fetchChannelVidoes, fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";
import LoadingSpinner from "./LoadingSpinner";
import { demoProfilePicture } from "../utils/constants";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  let { id } = useParams();

  useEffect(() => {
     
    id = id.match(/[^:]+/g);
    console.log(id);
    const fetchResults = async () => {
      setVideos(null);
      setChannelDetail(null);
      let videosData;
      let channelData;
      console.log(id);
      if(id) {

        videosData = await fetchFromAPI(`channel?id=${id}`);

        channelData = await fetchChannelData(`channel?id=${id}`);

        setVideos(videosData);
        setChannelDetail(channelData);
        
      }    
      


      setVideos(videosData);


    };

    fetchResults();
  }, [id]);
  if(!channelDetail) return <LoadingSpinner/>
  
  return <div className={classes.channelDetail}>
    <div className={classes.channelCard}>
      <img className={classes.channelPhoto} src={!channelDetail?.channelThumbnail ? demoProfilePicture : channelDetail.channelThumbnail} alt="channel_Image" />
      
      <span className={classes.channelName}>{!channelDetail?.channelTitle? "channel Title" : channelDetail.channelTitle}</span>
      {/* <span>Subscriber Count</span> */}
    </div>
    <div className={classes.videosContainer}>{
      videos?.map((data) => {        
        return <VideoCard key={data.videoId} {...data} />
      })
    }</div>

  </div>
}


export default ChannelDetail;