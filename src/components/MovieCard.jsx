import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import useFetchMovie from "../hooks/use-fetchmovie";
import imdb from "../images/imdb.svg";
import tomato from "../images/tomato.svg";
import { getGenreName } from "../util/genreList";

const Moviecard = ({ movie }) => {
  const [fetch] = (useFetchMovie = movie);
  const [favorite, setFavorite] = useState(false);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";
  const releaseDate = new Date(movie.release_date).toUTCString();

  const addToFavourite = () => {
    if (!favourite) {
      setFavorite(true);

      toast.success(`Added ${movie.title} to favourites`);
    } else {
      setFavorite(false);
      toast(
        <div className='text-red-500'>Removed {movie.title} from favorites</div>
      );
    }
  };

  return (
    <div
      data-testid='movie-card'
      className='font-bold w-full mx-auto max-w-[333px] flex flex-col space-y-2 sm:max-w-none'
    >
      <div className='relative'>
        {movie.poster_path ? (
          <div>
            <img
              src={`${IMAGE_PATH}${movie.poster_path}`}
              alt={movie.title}
              data-testid='movie-poster'
              className='w-full'
              onClick={fetch}
            />
          </div>
        ) : (
          <div className="bg-slate-200 flex justify-center items-center aspect-[2_/_3]">
            <span>No image found</span>
          </div>
        )}
        <div 
          className={`absolute w-[30px] h-[30px] rounded-full backdrop-blur-[1px] top-4 right-4 flex justify-center items-center transition-normal hover:bg-red-400/50 hover:text-red-600
        ${!favorite ? "text-lightestGray bg-glassGray" : "text-red-600 bg-red-400/50"}`}
          onClick={addToFavourite}>
          <FaHeart size={16} className="mt-[1px]" />
        </div>
        <Toaster position="bottom-center" richColors />
      </div>
      <div className="flex items-center justify-between">
        <div 
          data-testid="movie-release-date"
          className="text-xs text-darkerLightGray">
          {releaseDate}
        </div>
        <div className="text-xs text-darkerLightGray">
          USA, 2016 - current
        </div>
      </div>
      <h3 onClick={fetch}
        data-testid="movie-title"
        className="text-lg text-darkestGray page-link">
        {movie.title}
      </h3>
      <div className="flex justify-between font-normal">
        <div className="flex items-center space-x-3 text-sm">
          <div>
            <img src={imdb} alt="IMDB logo" />
          </div>
          <span>860/100</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div>
            <img src={tomato} alt="tomatoes" />
          </div>
          <span>97%</span>
        </div>
      </div>
      <div className="text-xs text-darkerLightGray">
        {movie.genre_ids.map((genre, index) => (
          <span key={genre} className="mr-2 text-sm text-gray-600">
            {getGenreName(genre)}
            {index !== movie.genre_ids.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Moviecard;
