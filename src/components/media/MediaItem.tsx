import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {useMediaStore} from "../../store/MediaStore.tsx";
import {useFetchMediaCredits, useFetchMediaDetails} from "../../hooks/MediaHooks.tsx";
import ConvertLanguage from "../../util/ConvertLanguage.tsx";
import './styles/MediaItem.scss'

const MediaItem = () => {
    const {mediaID} = useParams();
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const {selectedMediaList, selectedMediaCredits} = useMediaStore();
    const {reset, resetCredits} = useMediaStore();

    /* fetch media details */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useFetchMediaDetails(mediaType, mediaID!)
    useFetchMediaCredits(mediaType, mediaID!)

    React.useEffect(() => {
        return () => {
            reset()
            resetCredits()
        }
    }, [])

    const printStuff = () => {
        console.log(selectedMediaList);
    }

    return (
        <React.Fragment>
            {/* Check if selectedMediaList is loaded*/}
            {Object.keys(selectedMediaList).length > 0 && Object.keys(selectedMediaCredits).length > 0 ?
                (
                    <div className={'selected-media-container'}>
                        {/* image */}
                        <img src={`https://image.tmdb.org/t/p/w500${selectedMediaList.poster_path}`}
                             alt={selectedMediaList.name}/>

                        <div className="media-item-content">
                            {/* title */}
                            {selectedMediaList.title ? (
                                <h1 className={'large'}>{selectedMediaList.title}</h1>
                            ) : (
                                <h1 className={'large'}>{selectedMediaList.name}</h1>
                            )}

                            {/* tag line */}
                            <p className={'medium tagline'}>{selectedMediaList.tagline}</p>

                            {/* overview */}
                            <h2 className={'small'}>Overview</h2>
                            <p className={'medium'}>{selectedMediaList.overview}</p>

                            {/* iterate genres, use key*/}
                            <h2 className={'small'}>Genres</h2>
                            <div className="genre__container">
                                {selectedMediaList.genres.map((genre: any, key: number) => (
                                    <p className={'genre__item'} key={key}>{genre.name}</p>
                                ))}
                            </div>

                            {/* rating */}
                            <h2 className={'small rating'}>Rating</h2>
                            <p>{(selectedMediaList.vote_average / 2).toFixed(1)} / 5</p>

                            {/* movie detail group*/}
                            <div className="movie__detail__group">
                                {/* language to full name*/}
                                <div className="detail__group__item">
                                    <p className={'small group-header'}>Language</p>
                                    <p>{ConvertLanguage(selectedMediaList.original_language)}</p>
                                </div>
                                {/* if movie: year release, else year aired*/}
                                <div className="detail__group__item">
                                    <p className={'small group-header'}>{mediaType === 'movie' ? 'Year' : 'Aired'}</p>
                                    <p>{mediaType === 'movie' ? selectedMediaList.release_date.split('-')[0] : selectedMediaList.first_air_date.substring(0, 4)}</p>
                                </div>
                                {/* if movie: length of film, else last aired */}
                                <div className="detail__group__item">
                                    <p className={'small group-header'}>{mediaType === 'movie' ? 'Length' : 'Last Aired'}</p>
                                    <p>{mediaType === 'movie' ? `${selectedMediaList.runtime} minutes` : selectedMediaList.last_air_date.substring(0, 4)}</p>
                                </div>
                                {/* status */}
                                <div className="detail__group__item">
                                    <p className={'small group-header'}>Status</p>
                                    <p>{selectedMediaList.status}</p>
                                </div>
                            </div>


                            {/* media credits */}
                            <div className="media__credits">
                                <h2 className={'small'}>Cast</h2>
                                <div className="media__credits__container">
                                    {selectedMediaCredits.cast.map((cast:any, key: number) => (
                                        <p className={'small cast__item'}
                                           key={key}>{cast.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                ) :
                (<p>loading</p>)
            }


            <button onClick={printStuff}>Print Stuff</button>
        </React.Fragment>
    );
};

export default MediaItem;



