import React, {useEffect} from 'react';
import axios from 'axios';
import {useMediaStore} from "../store/MediaStore.tsx";


export const useFetchMediaHome = () => {

    const {mediaHomePageList, updateMediaHomePageList} = useMediaStore();


    useEffect(() => {
        const fetchMediaData = async (mediaType: string, category: string) => {
                let url;
                if (category === 'trending') {
                    url = `https://api.themoviedb.org/3/${category}/${mediaType}/day?language=en-US`;
                } else {
                    url = `https://api.themoviedb.org/3/${mediaType}/${category}?language=en-US&page=1`;
                }

                try {
                    const response = await axios.get(url, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                        },
                    });
                    updateMediaHomePageList(mediaType, category, response.data);
                } catch
                    (error) {
                    console.error(error);
                }
            }
        ;
        const fetchHomeData = async () => {
            await Promise.all([
                fetchMediaData('movie', 'trending'),
                fetchMediaData('tv', 'trending'),
                fetchMediaData('movie', 'popular'),
                fetchMediaData('tv', 'popular'),
                fetchMediaData('movie', 'top_rated'),
                fetchMediaData('tv', 'top_rated'),
                fetchMediaData('movie', 'now_playing'),
                fetchMediaData('tv', 'airing_today'),
                fetchMediaData('movie', 'upcoming'),
                fetchMediaData('tv', 'on_the_air'),
            ]);
        };

        fetchHomeData();
    }, []);
};

