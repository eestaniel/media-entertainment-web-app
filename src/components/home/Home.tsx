import React from 'react';
import {useFetchMediaHome} from "../../hooks/MediaHooks"
import {useMediaStore} from "../../store/MediaStore.tsx";
import MediaCardList from "../media/MediaCardList.tsx";
import mediaCardList from "../media/MediaCardList.tsx";

const Home = () => {
    const {mediaHomePageList} = useMediaStore();

    /* Load state with media */
    useFetchMediaHome()


    const printState = () => {
        console.log(mediaHomePageList);
    }

    return (
        <React.Fragment>
            {/* Trending Media*/}
            <section className="trending">
                <h1>Trending <span>movies</span></h1>
                <div className="trending__list">
                    {mediaHomePageList[0].movie.trending.results && (
                        <MediaCardList mediaType="movie" category="trending" className={"trending__list"}
                                       totalAmount={mediaHomePageList[0]['movie']['trending'].length}/>
                    )}
                </div>

                <h1>Trending <span>tv shows</span></h1>
                <div className="trending__list">
                    {mediaHomePageList[0].tv.trending.results && (
                        <MediaCardList mediaType="tv" category="trending" className={"trending__list"}
                                       totalAmount={mediaHomePageList[0]['tv']['trending'].length}/>
                    )}
                </div>
            </section>

            {/* Popular Media*/}
            <section className="popular">
                <div className="category__group">
                    <h1>Popular <span>movies</span></h1>
                    <div className="popular__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.popular.results && (
                            <MediaCardList mediaType="movie" category="popular" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <h1>Popular <span>tv shows</span></h1>
                    <div className="popular__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.popular.results && (
                            <MediaCardList mediaType="tv" category="popular" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>

            {/* Top Rate Media */}
            <section className="top-rated">
                <div className="category__group">
                    <h1>Top Rated <span>movies</span></h1>
                    <div className="top-rated__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.top_rated.results && (
                            <MediaCardList mediaType="movie" category="top_rated" totalAmount={6}
                                             className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <h1>Top Rated <span>tv shows</span></h1>
                    <div className="top-rated__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.top_rated.results && (
                            <MediaCardList mediaType="tv" category="top_rated" totalAmount={6}
                                                className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>

            {/* Now playing Movies and Currently airing TV*/}
            <section className="now-playing">
                <div className="category__group">
                    <h1>Now Playing <span>movies</span></h1>
                    <div className="now-playing__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.now_playing.results && (
                            <MediaCardList mediaType="movie" category="now_playing" totalAmount={6}
                                             className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <h1>Currently Airing <span>tv shows</span></h1>
                    <div className="now-playing__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.airing_today.results && (
                            <MediaCardList mediaType="tv" category="airing_today" totalAmount={6}
                                                className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>

            {/* Upcoming Movies and On the Air TV*/}
            <section className="upcoming">
                <div className="category__group">
                    <h1>Upcoming <span>movies</span></h1>
                    <div className="upcoming__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.upcoming.results && (
                            <MediaCardList mediaType="movie" category="upcoming" totalAmount={6}
                                                className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <h1>On the Air <span>tv shows</span></h1>
                    <div className="upcoming__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.on_the_air.results && (
                            <MediaCardList mediaType="tv" category="on_the_air" totalAmount={6}
                                                className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>


            <button onClick={printState}>Print State</button>
        </React.Fragment>
    );
};

export default Home
