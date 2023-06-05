import React, {useRef} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const SearchBar = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (location.pathname === '/') {
            navigate(`/all/search/${searchRef.current?.value}?page=1`, {
                state: {
                    mediaType: 'all',
                    browseType: 'search',
                    selectedBrowseType: searchRef.current?.value,
                    page: 1
                }
            });
        } else if (location.pathname.split('/')[1] === 'movie') {
            navigate(`/movie/search/${searchRef.current?.value}?page=1`, {
                state: {
                    mediaType: 'movie',
                    browseType: 'search',
                    selectedBrowseType: searchRef.current?.value,
                    page: 1
                }
            });
        } else if (location.pathname.split('/')[1] === 'tv') {
            navigate(`/tv/search/${searchRef.current?.value}?page=1`, {
                state: {
                    mediaType: 'tv',
                    browseType: 'search',
                    selectedBrowseType: searchRef.current?.value,
                    page: 1
                }
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* create search bar*/}
            <div className={'search-bar'}>
                <input
                    type="text"
                    placeholder={'Search...'}
                    ref={searchRef}
                />
            </div>
        </form>
    );
};

export default SearchBar;
