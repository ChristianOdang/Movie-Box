import logo from "../images/tv.svg";
import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  return (
    <Link
      to='/'
      className='flex items-center space-x-2 sm:space-x-3 md:space-x-5'
    >
      <div className='w-9 md:w-auto'>
        <img src={logo} alt='logo' />
      </div>
      <span
        className={`text-lg font-bold md:text-2xl sm:text-xl ${
          color || "text-white"
        }`}
      >
        MovieBox
      </span>
    </Link>
  );
};

export default Logo;