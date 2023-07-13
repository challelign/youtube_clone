import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_RAPID_API_KEY,
    "X-RapidAPI-Key": "860ae155demsh4cb78945333fcbbp10161ejsn4ffe38ab4dc8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
