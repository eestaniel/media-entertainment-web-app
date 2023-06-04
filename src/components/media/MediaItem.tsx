import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {useMediaStore} from "../../store/MediaStore.tsx";
import {useFetchMediaDetails} from "../../hooks/MediaHooks.tsx";
import ConvertLanguage from "../../util/ConvertLanguage.tsx";

const MediaItem = () => {
    const {mediaID} = useParams();
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const {selectedMediaList} = useMediaStore();
    const {reset} = useMediaStore();

    /* fetch media details */
    useFetchMediaDetails(mediaType, mediaID)

    React.useEffect(() => {
        return () => {
            reset()
        }
    }, [])

    const printStuff = () => {
        console.log(selectedMediaList);
    }

    return (
        <React.Fragment>
            {/* Check if selectedMediaList is loaded*/}
            {Object.keys(selectedMediaList).length > 0 ?
                (
                    <>
                        {/* image */}
                        <img src={`https://image.tmdb.org/t/p/w500${selectedMediaList.poster_path}`}
                             alt={selectedMediaList.title}/>

                        {/* title */}
                        <h1>{selectedMediaList.title}</h1>

                        {/* overview */}
                        <p>{selectedMediaList.overview}</p>

                        {/* iterate genres, use key*/}
                        {selectedMediaList.genres.map((genre, key) => (
                            <p key={key}>{genre.name}</p>
                        ))}

                        {/* rating */}
                        <p>{(selectedMediaList.vote_average / 2).toFixed(1)} / 5</p>

                        {/* movie detail group*/}
                        <div className="movie__detail__group">
                            {/* language to full name*/}
                            <p>{ConvertLanguage(selectedMediaList.original_language)}</p>
                            {/* if movie: year release, else year aired*/}
                            <p>{mediaType === 'movie' ? selectedMediaList.release_date.split('-')[0] : selectedMediaList.first_air_date}</p>
                        </div>

                        {/* if movie: length of film, else last aired */}
                        <p>{mediaType === 'movie' ? `${selectedMediaList.runtime} min` : selectedMediaList.last_air_date}</p>

                        {/* status */}
                        <p>{selectedMediaList.status}</p>
                    </>
                ) :
                (<p>loading</p>)
            }


            <button onClick={printStuff}>Print Stuff</button>
        </React.Fragment>
    );
};

export default MediaItem;



