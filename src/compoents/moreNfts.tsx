import UFO_boy from "../assets/ufo-boy.png";
import Meteor_boy from "../assets/meteor-boy.png";
import Astronout_girl from "../assets/astronout-girl.png";
import Avatar1 from "../assets/avatar-1.png";
import Avatar2 from "../assets/avatar-2.png";
import Avatar3 from "../assets/avatar-3.png";
import Eye_icon from "../assets/Eye.svg";

import { Link } from "react-router-dom";

interface IMoreNFTs {
  image: string;
  title: string;
  auth_icon: string;
  auth_name: string;
  price: string;
  highest_bid: string;
}

const moreNFTsMock: IMoreNFTs[] = [
  {
    image: UFO_boy,
    title: "Distant Galaxy",
    auth_icon: Avatar3,
    auth_name: "MoonDancer",
    price: "1.63",
    highest_bid: "0.33",
  },
  {
    image: Meteor_boy,
    title: "Life On Edena",
    auth_icon: Avatar2,
    auth_name: "NebulaKid",
    price: "1.63",
    highest_bid: "0.33",
  },
  {
    image: Astronout_girl,
    title: "Astrofiction",
    auth_icon: Avatar1,
    auth_name: "Spaceone",
    price: "1.63",
    highest_bid: "0.33",
  },
];

export const MoreNFTs = () => {
  return (
    <>
      <main>
        <div className="container mx-auto px-[195px] py-20 bg-[#2b2b2b] text-white font-sans">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-[38px] font-semibold leading-[120%]">
                Discover More NFTs
              </h2>
              <p className="pt-[10px] text-[22px] leading-[160%]">
                Explore New Trending NFTs
              </p>
            </div>

            {/* Button NFT pagegamas, Marketplace digan PAgega otvorishi kere */}
            <Link to="/nft">
              <button className="flex items-center gap-x-3 px-[50px] h-[60px] rounded-[20px] border-2 border-[#A259FF] transition-transform transform hover:scale-95">
                <img src={Eye_icon} alt="see all" />
                <p className="font-semibold leading-[140%]">See All</p>
              </button>
            </Link>
          </div>

          <div className="pt-[60px] flex items-center justify-between gap-x-[30px]">
            {moreNFTsMock.map((element, idx) => (
              <div
                key={idx}
                className="bg-[#3b3b3b] rounded-[20px] transition-transform transform hover:scale-95"
              >
                <img src={element.image} alt={element.title} />
                <div className="px-[30px] py-[25px]">
                  <h3 className="text-[22px] font-semibold leading-[30px]">
                    {element.title}
                  </h3>
                  <div className="flex items-center gap-x-3 pt-[5px]">
                    <img src={element.auth_icon} alt={element.auth_name} />
                    <p className="font-mono leading-[22px]">
                      {element.auth_name}
                    </p>
                  </div>
                  <div className="pt-[27px] font-mono flex items-center justify-between">
                    <div>
                      <p className="text-[#858584] text-xs">Price</p>
                      <p className="leading-[22px] pt-2">{element.price} ETH</p>
                    </div>
                    <div className="text-end">
                      <p className="text-[#858584] text-xs">Highest Bid</p>
                      <p className="leading-[22px] pt-2">
                        {element.highest_bid} wETH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MoreNFTs;
