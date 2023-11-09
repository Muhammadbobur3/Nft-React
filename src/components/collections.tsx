import alien from "../assets/Alien.png";
import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import bear from "../assets/bear.png";
import mushroom from "../assets/mushroomfirst.png";
import mushroom2 from "../assets/mushroomsecond.png";
import mushroom3 from "../assets/mushroomthird.png";
import disco from "../assets/discofirst.png";
import disco2 from "../assets/discosecond.png";
import disco3 from "../assets/discothird.png";
import fox from "../assets/MrFox.png";
import alienn from "../assets/Alien.png";
import man from "../assets/Man.png";

export const Collection = () => {
  return (
    <div className=" mx-auto w-8/12 px-28">
      <div className="w- flex flex-col ">
        <h2 className="text-4xl font-serif text-white mb-1">Trending Collection</h2>
        <p className="text-xl font-serif text-white">Checkout our weekly updated trending collection.</p>
      </div>
      <div className="flex justify-center gap-6">
        <div className="flex">
          <div className="flex flex-col justify-center mt-14">
            <img className="w-80" src={dog} alt="image" />
            <div className="flex justify-center align-center pt-3 gap-3">
              <img className="w-23 h-23" src={cat} alt="image" />
              <img className="w-23 h-23" src={bear} alt="image" />
              <button className="px-2 text-white text-3xl bg-purple-500 rounded-2xl p-0">1025+</button>
            </div>
            <h2 className="text-xl text-white mt-2">DSGN Animals</h2>
            <a className="flex mt-2" href="#">
              <img src={fox} alt="Fox" />
              <p className="text-white text-0.5">MrFox</p>
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center mt-14">
            <img className="w-80" src={mushroom} alt="image" />
            <div className="flex justify-center align-center pt-3 gap-3">
              <img className="w-23 h-23" src={mushroom2} alt="image" />
              <img className="w-23 h-23" src={mushroom3} alt="image" />
              <button className="px-2 text-white text-3xl bg-purple-500 rounded-2xl p-0">1025+</button>
            </div>
            <h2 className="text-xl text-white mt-2">Magic Mushrooms</h2>
            <a className="flex mt-2" href="#">
              <img src={man} alt="Fox" />
              <p className="text-white text-0.5">Shroomie</p>
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center mt-14">
            <img className="w-80" src={disco} alt="image" />
            <div className="flex justify-center align-center pt-3 gap-3">
              <img className="w-23 h-23" src={disco2} alt="image" />
              <img className="w-23 h-23" src={disco3} alt="image" />
              <button className="px-2 text-white text-3xl bg-purple-500 rounded-2xl p-0">1025+</button>
            </div>
            <h2 className="text-xl text-white mt-2">Disco Machines</h2>
            <a className="flex mt-2" href="#">
              <img src={alienn} alt="Fox" />
              <p className="text-white text-0.5">Bekin2Robots</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
