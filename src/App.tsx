import React from 'react';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import TV from './components/tv/TV';
import Navbar from "./components/navigation/Navbar.tsx";
import SearchBar from "./components/navigation/SearchBar.tsx";
import BrowseMedia from "./components/media/BrowseMedia.tsx";

const App = () => {

    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <SearchBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movie/*" element={<Movie/>}/>
                    <Route path="/tv/*" element={<TV/>}/>
                    <Route path="/all/search/:movieName" element={<BrowseMedia/>}/>
                    {/* TODO change to error 404 not found*/}
                    {/*<Route path="/*" element={<Home />} />*/}

                    {/*TODO Validate url parameters before using in api calls*/}
                </Routes>
            </Router>
        </React.Fragment>
    );
};

export default App;
