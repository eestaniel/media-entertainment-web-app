import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import MediaGenres from '../genres/MediaGenres';


const Movie = () => {
  return (
    <div>
      {/* Your Movie page content here */}
      <Routes>
        <Route path="/" element={<MediaGenres />} />
        <Route path="/:genre/*" element={null} />
        <Route path="/category/:category" element={null} />
        <Route path="/search/:searchQuery" element={null} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Movie;
