import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import SignIn from "../components/SignIn";
import { useLoadingUpdate } from "../context/LoadingContext";

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [moviesListHeading, setMovieListHeading] = useState("Featured Movie");

  const toggleLoading = useLoadingUpdate();

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search/movie" : "movie/top_rated";

    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          query: searchKey
        },
      });
      if (results) {
        const load = setTimeout(() => toggleLoading(false), 1000);
      }
      const featured = results.slice(0, 10);
      const randomMovie = Math.floor(Math.random() * results.length);
      if (searchKey) {
        setMovieListHeading(`Search Results (${results.length})`);
        setMovies(results);
        setSelectedMovie(results[0]);
      } else {
        setMovies(featured);
        setSelectedMovie(results[randomMovie]);
      }
    } catch (error) {
      const load = setTimeout(() => {
        toggleLoading(false);
        toast.error(`Error: ${error}`);
      }, 1000);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
    setSearchKey("");
  };

  return (
    <main className="font-dmSans">
      <Toaster position="bottom-center" richColors />
      <section
        className="relative flex flex-col h-screen bg-center bg-no-repeat bg-cover bg-slate-400"
        style={{
          backgroundImage: `url(${IMAGE_PATH}${selectedMovie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <header className="relative z-10 px-4 pt-4 md:px-8 md:pt-5 lg:pt-6 xl:px-12">
          <div className="container grid grid-cols-2 grid-rows-2 gap-4 mx-auto lg:flex lg:justify-between lg:gap-0 lg:items-center md:gap-5">
            <Logo />
            <SignIn />
            <SearchBar
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              searchMovies={searchMovies}
            />
          </div>
        </header>
        <MovieDetails selectedMovie={selectedMovie} />
      </section>
      <MovieList movies={movies} heading={moviesListHeading} />
    </main>
  );
};

export default HomePage;