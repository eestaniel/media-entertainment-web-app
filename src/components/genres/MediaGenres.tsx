import React, {useRef} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {useFetchGenres} from "../../hooks/MediaHooks";
import './MediaGenres.scss'

const MediaGenres = () => {
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const genres = useFetchGenres(mediaType);

    const count = useRef(0);

    return (
        <div className={'genre-container'}>
            {/* Map genres and print name */}
            {genres.map((genre: { id: number, name: string }) => (
                <Link to={`/${mediaType}/genre/${genre.id}?page=1`}
                      className={`${count.current++ % 2 === 0 ? 'even' : 'odd'}`}
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
                        <h2 className={'medium'}>{genre.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MediaGenres;
