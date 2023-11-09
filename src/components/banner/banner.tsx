import rocket from "../../assets/RocketLaunch.svg"
import baannerImg from "../../assets/banner1.png"
import avatar from "../../assets/avatar.png"

export const Banner = () => {
    return (
        <div className="container-div flex justify-between mx-auto my-20 gap-8">
            <div className="flex flex-col items-start">
                <h1 className="font-semibold text-white text-[67px]" >Discover digital art & Collect NFTs</h1>
                <p className="font-normal text-xl text-white mt-5">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <button className="flex gap-3 text-white font-semibold text-base rounded-[20px] bg-[#A259FF] px-10 py-5 mt-8"><img src={rocket} alt="icon" />Get Started</button>
                <div className="flex gap-8 mt-8">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-3xl text-white">240k+</h3>
                        <p className="text-2xl font-normal text-white">Total Sale</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-3xl text-white">240k+</h3>
                        <p className="text-2xl font-normal text-white">Total Sale</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-3xl text-white">240k+</h3>
                        <p className="text-2xl font-normal text-white">Total Sale</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-[20px] shadow-xl">
                <img className="rounded-t-[20px] rounded-ss-[20px] w-[610px]" src={baannerImg} alt="img" />
                <div className="rounded-es-[20px] rounded-ee-xl flex flex-col gap-3 py-5 px-5 bg-[#3B3B3B]">
                    <h3 className="text-2xl font-semibold text-white">Space Walking</h3>
                    <div className="flex gap-3">
                        <img src={avatar} alt="icon" />
                        <p className="font-normal text-base text-white">Animakid</p>
                    </div>
                </div>
            </div>
        </div>
    )
}