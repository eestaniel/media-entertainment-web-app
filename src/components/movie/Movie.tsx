import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import MediaGenres from '../genres/MediaGenres';
import MediaItem from '../media/MediaItem';
import BrowseMedia from "../media/BrowseMedia.tsx";

const Movie = () => {
  return (
    <div>
      {/* Your Movie page content here */}
      <Routes>
        <Route path="/" element={<MediaGenres />} />
        <Route path="/:mediaID" element={<MediaItem />} />
        <Route path="/:genre/*" element={null} />
        <Route path="/category/:category" element={<BrowseMedia />} />
        <Route path="/search/:searchQuery" element={null} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Movie;
