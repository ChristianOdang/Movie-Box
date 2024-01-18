import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const iconSize = 24;

  return (
    <footer className='flex flex-col items-center px-4 py-8 space-y-5 font-bold text-darkestGray lg:space-y-6 md:py-12'>
      <ul className='flex space-x-6 md:space-x-8 lg:space-x-10'>
        <li className='page-link'>
          <FaFacebookSquare size={iconSize} />
        </li>
        <li className='page-link'>
          <FaInstagram size={iconSize} />
        </li>
        <li className='page-link'>
          <FaTwitter size={iconSize} />
        </li>
        <li className='page-link'>
          <FaYoutube size={iconSize} />
        </li>
      </ul>
      <ul className='flex flex-wrap gap-4 gap-y-2 text-sm justify-center lg:text-[1rem]'>
        <li>Terms and Conditions</li>
        <li>Privacy & Policy</li>
      </ul>
      <p className='text-darkerGray text-sm lg:text-[1rem]'>
        © {year} MovieBox by Johnny Son
      </p>
    </footer>
  );
};
export default Footer
