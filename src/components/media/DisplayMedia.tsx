import React from 'react';
import { useSearchParams } from 'react-router-dom';

const DisplayMedia = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page');

  // Call the TMDB API with the pageNumber parameter

  return (
    <div>
      {/* Display your movie cards or TV show cards here */}
    </div>
  );
};

export default DisplayMedia;
