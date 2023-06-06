import React from 'react';
import {useFetchMediaHome} from "../../hooks/MediaHooks"
import {useMediaStore} from "../../store/MediaStore.tsx";
import MediaCardList from "../media/MediaCardList.tsx";
import {Link} from "react-router-dom";
import './Home.scss'

const Home = () => {
    const {mediaHomePageList} = useMediaStore();
    /* Load state with media */
    useFetchMediaHome()



    return (
        <div className={'media-container'}>
            {/* Trending Media*/}
            <section className="trending__section">
                <div className="trending__media">
                    <div className="header__group">
                        <h1>Trending <span>movies</span></h1>
                    </div>
                    <div className="trending__list-container">
                        {mediaHomePageList[0].movie.trending?.results && (
                            <MediaCardList mediaType="movie"
                                           category="trending"
                                           className={"trending__list"}
                                           totalAmount={mediaHomePageList[0]['movie']['trending'].length}/>
                        )}
                    </div>
                </div>

                <div className="trending__media">
                    <div className="header__group">
                        <h1>Trending <span>tv shows</span></h1>
                    </div>
                    <div className="trending__list-container">
                        {mediaHomePageList[0].tv.trending.results && (
                            <MediaCardList mediaType="tv" category="trending" className={"trending__list"}
                                           totalAmount={mediaHomePageList[0]['tv']['trending'].length}/>
                        )}
                    </div>
                </div>

            </section>

            {/* Popular Media*/}
            <section className="category__section">
                <div className="category__group">
                    <div className="header__group">
                        <h1>Popular <span>movies</span></h1>
                        <Link to={'/movie/category/popular?page=1'}
                              state={{mediaType: 'movie', browseType: 'category', selectedBrowseType: 'popular', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>
                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.popular.results && (
                            <MediaCardList mediaType="movie" category="popular" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <div className="header__group">
                        <h1>Popular <span>tv shows</span></h1>
                        <Link to={'/tv/category/popular?page=1'}
                                state={{mediaType: 'tv', browseType: 'category', selectedBrowseType: 'popular', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>
                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.popular.results && (
                            <MediaCardList mediaType="tv" category="popular" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>

            {/* Top Rate Media */}
            <section className="category__section">
                <div className="category__group">
                    <div className="header__group">
                        <h1>Top Rated <span>movies</span></h1>
                        <Link to={'/movie/category/top_rated?page=1'}
                                state={{mediaType: 'movie', browseType: 'category', selectedBrowseType: 'top_rated', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>
                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.top_rated.results && (
                            <MediaCardList mediaType="movie" category="top_rated" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <div className="header__group">
                        <h1>Top Rated <span>tv shows</span></h1>
                        <Link to={'/tv/category/top_rated?page=1'}
                                state={{mediaType: 'tv', browseType: 'category', selectedBrowseType: 'top_rated', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>
                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.top_rated.results && (
                            <MediaCardList mediaType="tv" category="top_rated" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>

            {/* Now playing Movies and Currently airing TV*/}
            <section className="category__section">
                <div className="category__group">
                    <div className="header__group">
                        <h1>Now Playing <span>movies</span></h1>
                        <Link to={'/movie/category/now_playing?page=1'}
                                state={{mediaType: 'movie', browseType: 'category', selectedBrowseType: 'now_playing', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>

                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.now_playing.results && (
                            <MediaCardList mediaType="movie" category="now_playing" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <div className="header__group">
                        <h1>Currently Airing <span>tv shows</span></h1>
                        <Link to={'/tv/category/airing_today?page=1'}
                                state={{mediaType: 'tv', browseType: 'category', selectedBrowseType: 'airing_today', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>

                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.airing_today.results && (
                            <MediaCardList mediaType="tv" category="airing_today" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>

            {/* Upcoming Movies and On the Air TV*/}
            <section className="category__section">
                <div className="category__group">
                    <div className="header__group">
                        <h1>Upcoming <span>movies</span></h1>
                        <Link to={'/movie/category/upcoming?page=1'}
                                state={{mediaType: 'movie', browseType: 'category', selectedBrowseType: 'upcoming', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>
                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].movie.upcoming.results && (
                            <MediaCardList mediaType="movie" category="upcoming" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>

                <div className="category__group">
                    <div className="header__group">
                        <h1>On the Air <span>tv shows</span></h1>
                        <Link to={'/tv/category/on_the_air?page=1'}
                                state={{mediaType: 'tv', browseType: 'category', selectedBrowseType: 'on_the_air', page: 1}}
                        >
                            <p className="small" >See More</p>
                        </Link>
                    </div>
                    <div className="media__list">
                        {/*check if populated, then map 6 items*/}
                        {mediaHomePageList[0].tv.on_the_air.results && (
                            <MediaCardList mediaType="tv" category="on_the_air" totalAmount={6}
                                           className={'category__list'}/>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home
