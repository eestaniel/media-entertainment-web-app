import React from 'react';
import axios from 'axios';
import {useMediaStore} from "../store/MediaStore.tsx";


export const useFetchMediaHome = () => {

    const {mediaHomePageList, updateMediaHomePageList} = useMediaStore();


    React.useEffect(() => {
        const fetchMediaData = async (mediaType: string, category: string) => {
                const apiURL = `/.netlify/functions/GetMediaHome?mediaType=${mediaType}&category=${category}`;

                try {
                    const response = await axios.get(apiURL);

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
            const url = `/.netlify/functions/GetFetchMediaDetails?mediaType=${mediaType}&mediaID=${mediaID}`;
            try {
                const response = await axios.get(url);
                updateSelectedMediaList(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchMediaDetails();
    }, [updateSelectedMediaList]);
}

export const useFetchMediaCredits = (mediaType: string, mediaID: string) => {

    const {updateSelectedMediaCredits} = useMediaStore();

    React.useEffect(() => {
        const fetchMediaCredits = async () => {
            const url = `/.netlify/functions/GetFetchMediaCredits?mediaType=${mediaType}&mediaID=${mediaID}`
            try {
                const response = await axios.get(url);
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
    React.useEffect(() => {
        const fetchMediaData = async () => {
            const url = `/.netlify/functions/GetBrowseMedia?mediaType=${mediaType}&browseType=${browseType}&page=${page}&selectedBrowseType=${selectedBrowseType}`;

            try {

                const response = await axios.get(url);
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
            const url = `/.netlify/functions/GetFetchGenres?mediaType=${mediaType}`;
            try {
                const response = await axios.get(url)
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
            const url = `/.netlify/functions/GetFetchMediaGenre?mediaType=${mediaType}&genreID=${genreID}&page=${page}`;
            try {
                const response = await axios.get(url);
                updateBrowseList(response.data)
            } catch
                (error) {
                console.error(error);
            }
        };
        fetchMediaData();
    }, [updateBrowseList, mediaType, genreID, page]);
}












