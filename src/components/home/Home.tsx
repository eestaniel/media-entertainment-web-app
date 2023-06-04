import React from 'react';
import {useFetchMediaHome} from "../../hooks/MediaHooks"
import {useMediaStore} from "../../store/MediaStore.tsx";
import MediaCardList from "../media/MediaCardList.tsx";

const Home = () => {
    const {mediaHomePageList} = useMediaStore();

    /* Load state with media */
    useFetchMediaHome()


    const printState = () => {
        console.log(mediaHomePageList);
    }

    return (
        <React.Fragment>
            <section className="trending">
                <h1>Trending</h1>
                <div className="trending__list">
                    {mediaHomePageList[0].movie.trending.results && (
                        <MediaCardList mediaType="movie" category="trending"/>
                    )}
                </div>
            </section>
            <button onClick={printState}>Print State</button>
        </React.Fragment>
    );
};

export default Home
