import React from 'react';
import './styles/Search.scss'
import { useSearchStore } from "../store/CentralizedStore";

const Search = () => {
    const searchText = useSearchStore((state) => state.search);
    const setSearchText = useSearchStore((state) => state.setSearch);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    React.useEffect(() => {
        console.log(searchText);
    }, [searchText]);

    return (
        <React.Fragment>

            <form onSubmit={handleSubmit} className="form__search" >
                <div className="search__icon" datatype={'search-icon'}></div>
                <input
                    type="text"
                    placeholder={"Search for movies or TV shows"}
                    onChange={handleChange}
                />
            </form>
        </React.Fragment>
    );
};

export default Search;
