import axios from "axios";

const KEY = "AIzaSyCnImC_tFHE4KtLNMdOvVEEH3PzKp1XA3o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
