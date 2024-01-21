import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import formatNumber from "../util/formatNumber";
import MovieHeader from "../components/MovieHeader";
import { IoIosArrowDown, IoIosList } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import moreMovies from "../images/more-movies.png";
import Logo from "../components/Logo";
import SideBar from "../components/SideBar";
import menu from "../images/menu.svg";

const MoviePage = () => {
  const location = useLocation();
  const [voteCount, setVoteCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { movie } = location.state;
  const releaseDate = new Date(movie.release_date).toUTCString();
  const voteAverage = movie.vote_average.toFixed(1);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  const formatter = () => {
    if (movie.vote_count < 1000) {
      setVoteCount(movie.vote_count);
    } else {
      const formattedNumber = formatNumber(movie.vote_count);
      setVoteCount(formattedNumber);
    }
  };

  useEffect(() => {
    formatter();
  }, []);

  return (
    <main className="font-poppins flex flex-col md:flex-row h-screen overflow-y-hidden space-y-6 md:space-y-0">
      <SideBar isMenuOpen={isMenuOpen} />
      <header className="md:hidden px-4 pt-4 md:px-8 md:pt-5">
        <div className="container flex items-center justify-between mx-auto">
          <Logo color="text-black" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </header>

      <section className="flex-1 px-4 pt-4 md:px-8 md:pt-5 lg:pt-6 xl:px-12 h-full overflow-y-scroll">
        <div className="container mx-auto space-y-8 mb-16">
          <div className="aspect-video lg:aspect-[1198_/_449] bg-slate-400 rounded-2xl bg-center bg-no-repeat bg-cove"
            style={{
              backgroundImage: `url(${IMAGE_PATH}${movie.backdrop_path})`,     
            }}
          ></div>

          <MovieHeader 
            {...movie}
            vote_count={voteAverage}
            release_date={releaseDate}
          />

          
        </div>
      </section>
    </main>
  )
}