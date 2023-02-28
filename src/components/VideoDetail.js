import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../styles/videoDetail.module.css';
import VideoCard from './VideoCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import LoadingSpinner from './LoadingSpinner';
const VideoDetail = () => {

    const [relatedVideos, setRelatedVideos] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        setRelatedVideos(null);
        const fetchData = async () => {
            const data = await fetchFromAPI(`related?id=${id}`);

            setRelatedVideos(data);
        }

        fetchData();

    }, [id]);

    if(!relatedVideos) return <LoadingSpinner/>;
    return <div className={classes.videoDetail}>
        <div className={classes.videoPlayerContainer}>
            <iframe className={classes.videoPlayer} src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"                
                allowFullScreen />
            {/* <span className={classes.caption}>{}</span> */}

        </div>


        <div className={classes.recommendationContainer}>
            {!relatedVideos&&<div>Loading</div>}
            {relatedVideos&&relatedVideos.map((video) => (<VideoCard  {...video}/>))}

            
        </div>


    </div>
}


export default VideoDetail;