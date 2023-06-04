import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const useFetchMediaHome = (mediaType, category) => {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${category}?language=en-US&page=1`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          },
        });
        setMediaData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [mediaType, category]);

  return mediaData;
};
