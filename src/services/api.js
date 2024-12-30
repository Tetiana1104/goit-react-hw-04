import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";

const ACCESS_KEY = "hW4vjLujJZnaPTQoaEfSysKvIsYQc-Dez83hh84VQNY";

const fetchImages = async (query, page = 1) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;
