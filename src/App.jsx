import { MovieCard } from './components/Stars/MovieCard';
import { Listing } from './components/listing/Listing';

import { movie } from './constants/movie';
import { default as listingData } from './constants/etsy.json';

import './styles/app.css';

export function App() {
  return (
    <>
      <MovieCard movie={movie} />
      <Listing items={listingData}></Listing>
    </>
  );
}
