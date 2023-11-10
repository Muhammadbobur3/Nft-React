import logo from "../../assets/Logo.svg";
import discord from "../../assets/DiscordLogo.svg";
import youtube from "../../assets/YoutubeLogo.svg";
import x from "../../assets/TwitterLogo.svg";
import meta from "../../assets/InstagramLogo.svg";
import massage from "../../assets/EnvelopeSimple.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto">
        <div className=" flex items-start justify-between gap-8 pb-8">
          <div className="w-[327px]">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[243] h-[32]" />
            </Link>
            <p className="w-[238px] font-normal text-base text-[#ccc] pt-8  ">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <h5 className="w-[238px] h-[18px] text-[#ccc] text-base font-normal pt-5">
              Join our community
            </h5>
            <div className=" flex items-center gap-3 pt-5">
              <a href="#">
                <img src={discord} alt="" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={youtube} alt="" />
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <img src={x} alt="" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={meta} alt="instagram" />
              </a>
            </div>
          </div>
          <div className="w-[240px]">
            <h3 className="text-white font-bold text-xl capitalize pb-6">
              Explore
            </h3>
            <ul className="flex text-[#ccc] gap-5 flex-col ">
              <li className="">
                <Link to="/" className="text-base font-normal ">
                  Marketplace
                </Link>
              </li>
              <li className="">
                <Link to="/" className="text-base font-normal ">
                  Rankings
                </Link>
              </li>
              <li className="">
                <Link to="/" className="text-base font-normal ">
                  Connect a wallet
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[420xp]">
            <h3 className="text-white font-bold text-xl pb-6">
              Join our weekly digest
            </h3>
            <p className="text-[#ccc] font-normal text-base pb-5">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <form className="w-[392px] h-16 bg-white rounded-3xl">
              <input
                type="text"
                placeholder="Enter your email here"
                className="text-base font-normal text-[#2b2b2b] py-4 px-5 rounded-3xl"
              />
              <Link to="/">
                <button
                  type="submit"
                  className="w-[179xp] h-16 bg-[#A259FF] px-[50.1px] rounded-3xl hover:scale-95 ease-in-out duration-300 text-base font-semibold text-white"
                >
                  Subscribe
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className=" h-0.5 bg-[#858584] mx-auto mb-5"></div>
        <p className="text-[#ccc] text-sm font-normal">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
