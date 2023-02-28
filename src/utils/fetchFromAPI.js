


export const BASE_URL = 'yt-api.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '18b00037a8mshac90d8f70dc2ac1p16f830jsnc592515f7533',
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






// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },

// };
// const searachVidoesURl = "search?part=snippet&q=madangowri&regionCode=in&maxResults=50";


// const cleanData = (data) => {
//   return {
//     channelTitle: data.snippet.channelTitle,
//     channelId: data.snippet.channelId,
//     videoId: data.id.videoId,
//     videoTitle: data.snippet.title,
//     description: data.snippet.description,
//     publishTime: data.snippet.publishTime,
//     thumbnail: data.snippet.thumbnails.medium.url

//   }
// }

// export const fetchFromAPI = async (url = "search?part=snippet&q=madangowri&regionCode=in&maxResults=50") => {

//   try {

//     console.log(url);
    
//     // let data = await fetch(`${BASE_URL}/${''}`,options);


//     let data = await fetch(`https://youtube-v31.p.rapidapi.com/search?q=cats&part=snippet%2Cid&regionCode=US&maxResults=50`, options);

//     data = await data.json();

//     console.log(data);

//     const newData = data.items.map(curData => cleanData(curData));

//     console.log(newData);

//     return newData;
//   }

//   catch (err) {
//     console.log(err.message);
//     console.log(err);
//   }

// };



// export const BASE_URL_2 = 'https://youtube-v3-alternative.p.rapidapi.com';

// const options_2 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '18b00037a8mshac90d8f70dc2ac1p16f830jsnc592515f7533',
// 		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
// 	}
// };

// const channelVidoes = "channel?id=UC0C-w0YjGpqDXGB8IHb662A";
// const cleanData_2 = (data) => {
//   return {
    
//     channelTitle: data.channelTitle,
//     channelId: data.channelId,
//     videoId: data.videoId,
//     videoTitle: data.title,
//     description: data.description,
//     // publishTime: data.snippet.publishTime,
//     thumbnail: data.thumbnail[3].url
//   }
// }

// export const fetchChannelVidoes = async (url) => {

//   try {

    
//     // let data = await fetch(`${BASE_URL}/${url}`, options);

//     let data = await fetch(`${BASE_URL_2}/'channel?id=${'UClVIlK8QHZ2PFkXF97bA0lg'}'`, options_2);

//     console.log("getting channel Videos");
//     data = await data.json();

//     console.log(data);

//     const newData = data.data.map(curData => cleanData_2(curData));

//     console.log(newData);

//     return newData;
//   }

//   catch (err) {
//     console.error(err.message);
//     console.error(err);
//   }

// };