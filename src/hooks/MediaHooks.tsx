import React from 'react';
import axios from 'axios';
import {useMediaStore} from "../store/MediaStore.tsx";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchMediaHome = () => {

    const {mediaHomePageList, updateMediaHomePageList} = useMediaStore();


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

        /* check if media home page list is not loaded */
        if (Object.keys(mediaHomePageList[0].movie.trending).length === 0) {
            fetchHomeData();
        }
    }, [updateMediaHomePageList]);
};


export const useFetchMediaDetails = (mediaType: string, mediaID: string) => {

    const {updateSelectedMediaList} = useMediaStore();

    React.useEffect(() => {
        const fetchMediaDetails = async () => {
            const url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}?language=en-US`;
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
    }, [updateSelectedMediaList]);
}

export const useFetchMediaCredits = (mediaType: string, mediaID: string) => {

    const {updateSelectedMediaCredits} = useMediaStore();

    React.useEffect(() => {
        const fetchMediaCredits = async () => {
            const url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}/credits?language=en-US`;
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
    }, [updateSelectedMediaCredits]);
}

export const useBrowseMedia = (mediaType: string, browseType: string, selectedBrowseType: string, page: string) => {

    const {updateBrowseList} = useMediaStore();
    console.log('mediaType:', mediaType, 'browseType:', browseType, 'selectedBrowseType:', selectedBrowseType, 'page:', page);
    React.useEffect(() => {
        const fetchMediaData = async () => {
            let url!: string;
            if (browseType === 'category') {
                url = `https://api.themoviedb.org/3/${mediaType}/${selectedBrowseType}?language=en-US&page=${page}`;
            } else if (browseType === 'genre') {
                url = `https://api.themoviedb.org/3/discover/${mediaType}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedBrowseType}`;
            } else if (browseType === 'search' && mediaType === 'all') {
                url = `https://api.themoviedb.org/3/search/multi?language=en-US&query=${selectedBrowseType}&page=${page}&include_adult=false`;
            } else if (browseType === 'search') {
                url = `https://api.themoviedb.org/3/search/${mediaType}?language=en-US&query=${selectedBrowseType}&page=${page}&include_adult=false`;
            }

            try {

                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                    },
                });
                updateBrowseList(response.data)
            } catch
                (error) {
                console.error(error);
            }
        };
        fetchMediaData();
    }, [selectedBrowseType, page, updateBrowseList]);
}

export const useFetchGenres = (mediaType: string) => {
    const [genres, setGenres] = React.useState([]);

    React.useEffect(() => {
        const fetchGenres = async () => {
            const url = `https://api.themoviedb.org/3/genre/${mediaType}/list?language=en-US`;
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                    },
                });
                setGenres(response.data.genres);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGenres();
    }, [mediaType]);

    return genres;
};


export const useFetchMediaGenre = (mediaType: string, genreID: string, page: string) => {

    const {updateBrowseList} = useMediaStore();

    React.useEffect(() => {
        const fetchMediaData = async () => {
            let url = `https://api.themoviedb.org/3/discover/${mediaType}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreID}`;
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                    },
                });
                updateBrowseList(response.data)
            } catch
                (error) {
                console.error(error);
            }
        };
        fetchMediaData();
    }, [updateBrowseList, mediaType, genreID, page]);
}












