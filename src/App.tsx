import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Movie from './components/movie/Movie';
import TV from './components/tv/TV';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/*" element={<Movie />} />
          <Route path="/tv/*" element={<TV />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
