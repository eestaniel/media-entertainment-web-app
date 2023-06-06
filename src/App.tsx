import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import TV from './components/tv/TV';
import Navbar from "./components/navigation/Navbar.tsx";
import SearchBar from "./components/navigation/SearchBar.tsx";
import All from "./components/all/All.tsx";

const App = () => {

    return (
        <div className={'container'}>
            <Router basename={'/'}>
                <Navbar/>

                <div className="main-container">
                    <SearchBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/movie/*" element={<Movie/>}/>
                        <Route path="/tv/*" element={<TV/>}/>
                        <Route path="/all/*" element={<All/>}/>
                        {/* TODO change to error 404 not found*/}
                        {/*<Route path="/*" element={<Home />} />*/}

                        {/*TODO Validate url parameters before using in api calls*/}
                    </Routes>
                    <div className="attribution" datatype={'tmdb'}></div>
                </div>
            </Router>
        </div>
    );
};

export default App;
