import { Link } from "react-router-dom";
import Collection from "../components/collections";
import { Banner } from "../components/banner/banner";

export const Home = () => {
  return (
    <>
      <Banner />
      <Collection></Collection>
    </>
  );
};
