import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import MediaGenres from '../genres/MediaGenres';
import MediaItem from '../media/MediaItem';
import BrowseMedia from "../media/BrowseMedia.tsx";

const Tv = () => {
  return (
    <div>
      {/* Your Movie page content here */}
      <Routes>
        <Route path="/" element={<MediaGenres />} />
        <Route path="/:mediaID" element={<MediaItem />} /> {/* Add this route */}
        <Route path="/:genre/*" element={<BrowseMedia />} />
        <Route path="/category/:category" element={<BrowseMedia />} />
        <Route path="/search" element={null} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Tv;
