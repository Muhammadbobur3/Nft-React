// import { Link } from "react-router-dom";
import MainCard from "../components/main-card";
import MoreNFTs from "../components/moreNfts";
import Collection from "../components/collections";
import { Banner } from "../components/banner/banner";

export const Home = () => {
  return (
    <>
      <Banner />
      <Collection />
      <MoreNFTs />
      <MainCard />
    </>
  );
};

export default Home
