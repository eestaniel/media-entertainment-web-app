import React, {useRef} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import './styles/SearchBar.scss'

const SearchBar = () => {
    const [focus, setFocus] = React.useState(false);
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    let placeHolder;
    switch (location.pathname.split('/')[1].toLowerCase()) {
        case 'movie':
            placeHolder = 'Search for movies';
            break;
        case 'tv':
            placeHolder = 'Search for TV';
            break;
        default:
            placeHolder = 'Search for movies or TV';

    }


    React.useEffect(() => {
       /*set searchref to ''*/
        searchRef.current!.value = '';
    }, [location.pathname]  )

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (searchRef.current?.value) {

            /*check if empty*/
            case '':
                return;
            /*check if only spaces*/
            case searchRef.current?.value?.match(/^\s*$/)?.input:
                return;
            default:
                if (location.pathname.split('/')[1] === 'all' || location.pathname.split('/')[1] === '') {
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


    }


    return (
        <form onSubmit={handleSubmit}>
            {/* create search bar*/}
            <div className={`search-bar ${focus ? 'focus' : searchRef.current?.value !== '' ? 'hasQuery' : ''}`}>
                <div className="search-bar__icon" datatype={'search'}></div>
                <input
                    type="text"
                    placeholder={placeHolder}
                    ref={searchRef}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}

                />
            </div>
        </form>
    );
};

export default SearchBar;
