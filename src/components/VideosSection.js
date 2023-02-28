import React, { useContext, useEffect, useState } from 'react';
import VideosContainer from './VideosContainer';

import classes from '../styles/videosSection.module.css';
import { Context } from '../utils/Context';
import LoadingSpinner from './LoadingSpinner';
const VidoesSection = () => {

    const { searchTerm } = useContext(Context);

    
    
   

    return <section className={classes.videosSection} ><span className={classes.title}><span>{!searchTerm?'New':searchTerm}  videos</span></span>
        <VideosContainer />
    </section>
}

export default VidoesSection;