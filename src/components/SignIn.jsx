import menu from "../images/menu.svg";

const SignIn = () => {
  return (
    <div className="flex items-center space-x-3 justify-end lg:justify-start-start lg:order-3 md:space-x-5">
      <span className="text-sm font-bold text-white md:text-[1rem]">
        Sign in
      </span>
      <div className="w-8 md:w-auto">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default SignIn;