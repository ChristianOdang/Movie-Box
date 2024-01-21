import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchKey, setSearchKey, searchMovies }) => {
  return (
    <form
      onSubmit={searchMovies}
      className="flex justify-between items-center rounded-lg border-lightestGray text-white text-white p-1 pl-3 pr-1 md:pr-2 col-span-2 lg:flex-1 lg:max-w-[525px]"
    >
      <input
        type="text"
        placeholder="what do you want to watch?"
        className="w-10/12 bg-transparent placeholder:text-white focus:outline-none"
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
      />
      <button type="submit" className="p-2 focus:outline-none">
        <FaSearch size={16} />
      </button>
    </form>
  );

};
export default SearchBar