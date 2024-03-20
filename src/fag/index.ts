import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
initializeApp();

export const updateYoutubeData = onRequest(async (request, response)=>{
  const doc = await getFirestore().collection('youtubechannel').doc('latest');

  const CHANNEL_ID = process.env.VITE_CHANNEL_ID;
  const API_KEY = process.env.VITE_API_KEY;
  const Link = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;
  fetch(Link)
  .then((res) => res.json())
  .then((data) => {
    doc.set(data);
  })
  .catch((error) => {
    response.send('Error fetching video data from YouTube API:'+error);
  });
});

// export const youtubeProxy = functions.https.onRequest(async (req, res) => {
//   try {
//     const fetch = await import("node-fetch");
//     const ytUrl = "";
//     const response = await fetch.default(ytUrl);
//     const xmlData = await response.text(); // Read response as text

//     // Set CORS headers to allow requests from localhost
//     res.set('Access-Control-Allow-Origin', 'http://localhost:5000');
//     res.set('Access-Control-Allow-Methods', 'GET');

//     // Set content type to XML
//     res.set('Content-Type', 'application/xml');

//     // Send XML response
//     res.send(xmlData);
//   } catch (error) {
//     console.error('Error fetching YouTube feed:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
