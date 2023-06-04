import React from 'react';
import axios from 'axios';
import {useMediaStore} from "../store/MediaStore.tsx";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchMediaHome = () => {

    const {updateMediaHomePageList} = useMediaStore();


    React.useEffect(() => {
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
                await sleep(250),
                fetchMediaData('tv', 'trending'),
                await sleep(250),
                fetchMediaData('movie', 'popular'),
                await sleep(250),
                fetchMediaData('tv', 'popular'),
                await sleep(250),
                fetchMediaData('movie', 'top_rated'),
                await sleep(250),
                fetchMediaData('tv', 'top_rated'),
                await sleep(250),
                fetchMediaData('movie', 'now_playing'),
                await sleep(250),
                fetchMediaData('tv', 'airing_today'),
                await sleep(250),
                fetchMediaData('movie', 'upcoming'),
                await sleep(250),
                fetchMediaData('tv', 'on_the_air'),
            ]);
        };

        fetchHomeData();
    }, []);
};


export const useFetchMediaDetails = (mediaType: string, mediaID: string) => {

    const {updateSelectedMediaList} = useMediaStore();

    React.useEffect(() => {
        const fetchMediaDetails = async () => {
            let url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}?language=en-US`;
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                    },
                });
                updateSelectedMediaList(response.data);
            } catch
                (error) {
                console.error(error);
            }
        };
        fetchMediaDetails();
    }, []);
}

export const useFetchMediaCredits = (mediaType: string, mediaID: string) => {

        const {updateSelectedMediaCredits} = useMediaStore();

        React.useEffect(() => {
            const fetchMediaCredits = async () => {
                let url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}/credits?language=en-US`;
                try {
                    const response = await axios.get(url, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                        },
                    });
                    updateSelectedMediaCredits(response.data);
                } catch
                    (error) {
                    console.error(error);
                }
            };
            fetchMediaCredits();
        }, []);
}















