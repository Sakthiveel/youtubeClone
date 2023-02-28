

export const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '18b00037a8mshac90d8f70dc2ac1p16f830jsnc592515f7533',
    'X-RapidAPI-Host': 'https://youtube-v3-alternative.p.rapidapi.com',
  },
};


const cleanData = (data) => {
  return {
    channelTitle: data.snippet.channelTitle,
    channelId: data.snippet.channelId,
    videoId: data.id.videoId,
    videoTitle: data.snippet.title,
    description: data.snippet.description,
    publishTime: data.snippet.publishTime,
    thumbnail: data.snippet.thumbnails.medium.url
  }
}

export const fetchFromAPI_2 = async (url = "search?query=cat&geo=US&lang=en&maxResults=50") => {

  try {

    console.log(url);
    let data = await fetch(`${BASE_URL}/${url}`, options);

    data = await data.json();

    console.log(data);

    const newData = data.items.map(curData => cleanData(curData));

    console.log(newData);

    return newData;
  }

  catch (err) {
    console.log(err.message);
    console.log(err);
  }

};


fetchFromAPI_2();