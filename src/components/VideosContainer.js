import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from '../styles/videosContainer.module.css';
import { Context } from "../utils/Context";
import { fetchChannelVidoes, fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import LoadingSpinner from "./LoadingSpinner";
import VideoCard from "./VideoCard";

const VideosContainer = () => {

    const [videos, setVideos] = useState(null);
    const { searchTerm, setSearchTerm } = useContext(Context);
    useEffect(() => {
        setVideos(null);
        //Initiale videos:
        const fecthData = async () => {
            
            let data;
            if (searchTerm) {
                data = await fetchFromAPI(`search?query=${searchTerm}&type=video&sort=relevance`);
            }
            else {
                data = await fetchFromAPI('search?query=mrbeast&type=video&sort=relevance');
            }

            setVideos(data);
        }

        fecthData();

    }, [searchTerm]);


    if (!videos) return <LoadingSpinner/>
    console.log(videos);

    return <div className={classes.videosContainer}>{
        videos.map((data) => {
            if (!data.videoId) return <ChannelCard key={1} {...data} />
            return <VideoCard key={data.videoId} {...data} />
        })
    }</div>
}


export default VideosContainer;