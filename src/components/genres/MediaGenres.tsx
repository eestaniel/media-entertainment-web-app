import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {useFetchGenres} from "../../hooks/MediaHooks";
import './MediaGenres.scss'

const MediaGenres = () => {
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const genres = useFetchGenres(mediaType);

    return (
        <div className={'genre-container'}>
            {/* Map genres and print name */}
            {genres.map((genre: { id: number, name: string }) => (
                <Link to={`/${mediaType}/genre/${genre.id}?page=1`}
                      key={genre.id}
                      state={{
                          mediaType: mediaType,
                          browseType: 'genre',
                          selectedBrowseType: genre.id,
                          genreName: genre.name,
                          page: 1,}}
                >
                    <div className={'genre'}
                         key={genre.id}>
                        <h1>{genre.name}</h1>
                    </div>
                </Link>
            ))}

            {/* Create test button to print genres */}
            <button onClick={() => console.log(genres)}>Print Genres</button>
        </div>
    );
};

export default MediaGenres;
