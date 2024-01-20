import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, heading }) => {
  const array = [...Array(10)];

  return (
  <section className="px-4 my-12 md:px-8 xl:px-12 md:mt-14 lg:mt-16 lg:mb-24">
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          {heading}
        </h2>
          <div className="flex items-center space-x-2 text-rose">
            <span className="font-normal sm:text-lg">See more</span>
            <IoIosArrowForward size={20} />
        </div>
        </div>
        {/* movie list */} 
        <ul className="grid justify-center gap-y-14 sm:justify-start sm:gap-x-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-16 md:gap-y-20 lg:grid-cols-4 lg:gap-x-20 lg:gap-y-24">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
    </div>
  </section>
 )
}

export default MovieList;




