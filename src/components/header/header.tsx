import logo from "../../assets/Logo.svg";
import user from "../../assets/User.svg";
import burgerMenu from "../../assets/Burger Menu.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="py-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[243] h-[32]" />
        </Link>
        <nav className="flex items-center gap-3 ">
          <ul className="flex items-center text-white gap-3 ">
            <li className="px-5 hover:scale-95 ease-in-out duration-300">
              <Link to="/" className="text-base font-semibold ">
                Marketplace
              </Link>
            </li>
            <li className="px-5 hover:scale-95 ease-in-out duration-300">
              <Link to="/" className="text-base font-semibold ">
                Rankings
              </Link>
            </li>
            <li className="px-5 hover:scale-95 ease-in-out duration-300">
              <Link to="/" className="text-base font-semibold ">
                Connect a wallet
              </Link>
            </li>
          </ul>
          <Link
            to="/"
            className="bg-[#A259FF] w-[152px] h-[60px] px-8 rounded-3xl flex items-center justify-between  hover:scale-95 ease-in-out duration-300"
          >
            <img src={user} alt="user" className="w-5 h-5 " />
            <p className="text-base font-semibold text-white">Sign Up</p>
          </Link>
        </nav>
        <img src={burgerMenu} alt="" className="xl:hidden" />
      </div>
    </header>
  );
}
export default Header;
