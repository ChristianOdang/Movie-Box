import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import useFetchMovie from "../hooks/use-fetchmovie";
import imdb from "../images/imdb.svg";
import tomato from "../images/tomato.svg";
import { getGenreName } from "../util/genreList";

const Moviecard = ({ movie }) => {
  const [fetch] = useFetchMovie = (movie);
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
        <div className="text-red-500">
          Removed {movie.title} from favorites
        </div>
      );
    }
  };
}