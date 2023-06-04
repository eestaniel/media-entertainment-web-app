import React, {useState, useEffect} from 'react';
import {useFetchMediaHome} from "../../hooks/MediaHooks"
import {useMediaStore} from "../../store/MediaStore.tsx";

const Home = () => {
    /*  const trendingMovies = useFetchMediaHome('movie', 'popular');
      const trendingTVShows = useFetchMediaHome('tv', 'popular');
      const popularMovies = useFetchMediaHome('movie', 'popular');
      const popularTVShows = useFetchMediaHome('tv', 'popular');
      const topRatedMovies = useFetchMediaHome('movie', 'top_rated');
      const topRatedTVShows = useFetchMediaHome('tv', 'top_rated');
      const nowPlayingMovies = useFetchMediaHome('movie', 'now_playing');
      const nowPlayingTVShows = useFetchMediaHome('tv', 'on_the_air');
      const upcomingMovies = useFetchMediaHome('movie', 'upcoming');
      const onAirTVShows = useFetchMediaHome('tv', 'on_the_air');*/
    const {mediaHomePageList, setMediaHomePageList} = useMediaStore();

    /* Load state with media */
    useFetchMediaHome()


    const printState = () => {
        console.log(mediaHomePageList);
    }

    return (
        <div>
            <button onClick={printState}>Print State</button>
        </div>
    );
};

export default Home
