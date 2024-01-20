import { AiFillPlayCircle } from "react-icons/ai";
import imdb from "../images/imdb.svg";
import tomato from "../images/tomato.svg";
import useFetchMovie from "../hooks/use-fetchmovie";

const MovieDetails = ({ selectedMovie }) => {
  const [fetch] = useFetchMovie(selectedMovie);

  return (
    <section className="relative z-10 flex items-center flex-1 px-4 pt-4 text-white md:px-8 xl:px-12">
      <div className="container mx-auto">
        <div className="space-y-3 max-w-[404px] lg:space-y-4 lg:max-w-[500px]">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.2]">
            {selectedMovie.title}
          </h1>
          <div className="flex items-center space-x-9">
            <div className="flex items-center space-x-3 text-sm font-normal">
              <div>
                <img src={imdb} alt="IMDB logo" />
              </div>
              <span>860/100</span>
            </div>
            <div className="flex items-center space-x-3 text-sm font-normal">
              <div>
                <img src={tomato} alt="tomatoes" />
              </div>
              <span>97%</span>
            </div>
          </div>
          <p className="font-medium lg:text-lg max-w-[404px]">
            {selectedMovie.overview}
          </p>
          <button className="btn bg-rose" onClick={fetch}>
            <AiFillPlayCircle size={20} />
            <span className="text-sm font-bold">WATCH TRAILER</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails;