import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import MediaGenres from '../genres/MediaGenres';
import DisplayMedia from '../media/DisplayMedia';


const Tv = () => {
  return (
    <div>
      {/* Your Movie page content here */}
      <Routes>
        <Route path="/" element={<MediaGenres />} />
        <Route path="/:genre/*" element={<DisplayMedia/>} />
        <Route path="/category/:category" element={<DisplayMedia />} />
        <Route path="/search/:searchQuery" element={<DisplayMedia />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Tv;
