


export const BASE_URL = 'yt-api.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
};


const cleanData = (data) => {
  return {
    // channelThumbnail:data.channelThumbnail[0].url,
    channelTitle: data.channelTitle,
    channelId: data.channelId,
    videoId: data.videoId,
    videoTitle: data.title,
    description: data.description,
    // publishTime: data.snippet.publishTime,
    thumbnail:data.thumbnail[1]?.url    
  }
}

const searcchURl = "search?query=madangowri&type=video&sort=relevance";

export const fetchFromAPI = async (url = "search?part=snippet&q=madangowri&regionCode=in&maxResults=50") => {

  try {

    
    // let data = await fetch(`${BASE_URL}/${url}`, options);

    let data = await fetch(`https://yt-api.p.rapidapi.com/${url}`, options);

    
    data = await data.json();

    console.log(data);
     

    const newData = data.data.map(curData => cleanData(curData));

    console.log(newData);

    return newData;
  }

  catch (err) {
    console.error(err.message);
    console.error(err);
  }

};


export const fetchChannelData = async (url) => {
  try {

    let data = await fetch(`https://yt-api.p.rapidapi.com/${url}`, options);    
    data = await data.json();

    return {
      channelThumbnail:data.meta.thumbnail[2]?.url,
      channelTitle:data.meta.title
    }

  }
  catch(err){
    console.log(err);
    console.log(err.message);
  }
}






