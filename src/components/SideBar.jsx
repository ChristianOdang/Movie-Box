import Logo from "./Logo";

import home from "../images/home.svg";
import projector from "../images/projector.svg";
import calendar from "../images/calendar.svg";
import tvShow from "../images/tv_show.svg";
import logout from "../images/logout.svg";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "Home",
    icons: home,
    active: false,
  },
  {
    path: "/",
    name: "Movies",
    icon: projector,
    active: true,
  },
  {
    path: "/",
    name: "TV Shows",
    icon: tvShow,
    active: false,
  },
  {
    path: "/",
    name: "Upcoming",
    icon: calendar,
    active: false,
  },
];

const SideBar = ({ isMenuOpen }) => {
  return (
    <aside
      className={`fixed md:static bg-white border-black/30 border-r flex-col justify-between h-screen py-8 w-[230px] rounded-r-[45px] text-[#666] md:flex transition-all ease-in-out duration-500 md:translate-x-0 
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="px-4 hidden md:block">
        <Logo color="text-black" />
      </div>
      <ul className="font-medium">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              className={`block py-5 transition-normal hover:text-rose hover:bg-lightRose pl-10 hover:border:rose hover:border-r-[6px] ${link.active &&
                "text-rose bg-lightRose border-rose border-r-[6px]"
                }`}
              to={link.path}
            >
              <div className="flex items-center gap-4">
                <div>
                  <img src={link.icon} alt={link.name} />
                </div>
                <span className="text-lg">{link.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="px-4 hidden md:block">
        <div className="bg-lightRose border border-rose px-4 py-8 rounded-[20px] space-y-3">
          <p className="text-sm font-medium">
            Play movie quizzes and earn free tickets
          </p>
          <p className="text-xs">50k people are playing now</p>
          <button className="text-xs px-5 py-2 bg-lightRose text-rose font-medium block mx-auto rounded-3xl hover:bg-rose hover:text-white transition-normal">
            Start Playing
          </button>
        </div>
      </div>
      <div className="pl-10 mt-4">
        <div className="flex items-center gap-4">
          <div>
            <img src={logout} alt="log out" />
          </div>
          <span>Log out</span>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;