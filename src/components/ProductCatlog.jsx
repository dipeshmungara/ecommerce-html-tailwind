import tshirt from "../images/black-tshirt-light-background.jpg";
import cap from "../images/cap.jpg";
import { LuCrown, LuDot } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMessage2Fill, RiMessage2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { LiaShareAltSolid } from "react-icons/lia";





export default function ProductCatlog() {
    return (
        <>

            <div className="w-full max-w-[1440px] mx-auto py-3">
                <div className="lg:flex md:flex gap-12">
                    <div className="lg:w-3/5 md:w-3/5">
                        <div className="flex gap-4">
                            <div className="w-1/7">
                                <div className="mb-3">
                                    <img className="w-full max-w-[80px] h-[80px] object-cover rounded-lg" src={tshirt} alt="" />
                                </div>
                                <div className="my-3">
                                    <img className="w-full max-w-[80px] h-[80px] object-cover rounded-lg" src={tshirt} alt="" />
                                </div>
                                <div className="my-3">
                                    <img className="w-full max-w-[80px] h-[80px] object-cover rounded-lg" src={tshirt} alt="" />
                                </div>
                                <div className="my-3">
                                    <img className="w-full max-w-[80px] h-[80px] object-cover rounded-lg" src={tshirt} alt="" />
                                </div>
                                <div className="mt-3">
                                    <img className="w-full max-w-[80px] h-[80px] object-cover rounded-lg" src={tshirt} alt="" />
                                </div>
                            </div>
                            <div className="w-5/6">
                                <img className="w-full max-w-[720px] h-[450px] object-cover rounded-xl	" src={tshirt} alt="" />
                            </div>
                        </div>
                        <div className="w-full lg:max-w-[790px] md:max-w-[715px] mt-5 border-2 border-inherit rounded-xl p-5">
                            <div className="grid lg:grid-cols-2 gap-4">

                                <div className="flex justify-start items-start">
                                    <img src={cap} alt="" className="w-full max-w-[50px] h-[50px] rounded-full object-cover" />
                                    <div className="ml-3">
                                        <div className="flex justify-start items-center">
                                            <h3 className="text-black font-bold text-[20px]">Barudak Disaster Mall</h3>
                                            <div className="ml-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-sky-600 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                                                <LuCrown className="text-[16px]" />
                                            </div>
                                        </div>
                                        <p className="text-emerald-500 text-[16px] font-medium">
                                            "Online"
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:text-right">
                                    <a className="px-5 py-1 mx-2 border text-[16px] rounded-md	border-black " href="#">Follow</a>
                                    <a className="px-5 py-1 ml-1 border text-[16px] rounded-md	border-black " href="#">Visit Store</a>
                                </div>
                            </div>
                            <div className="lg:flex justify-between mt-3">
                                <div className="flex items-center">
                                    <FaStar className="text-slate-400 text-[16px]" />
                                    <p className="ml-2">Rating Store : <strong>96%</strong></p>
                                </div>
                                <div className="flex items-center">
                                    <FaLocationDot className="text-slate-400 text-[16px]" />
                                    <p className="ml-2">Location Store : <strong>Tulungagung</strong></p>
                                </div>
                                <div className="flex items-center">
                                    <RiMessage2Fill className="text-slate-400 text-[16px]" />
                                    <p className="ml-2">Chat Replay : <strong>98%</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-5 lg:w-2/5 lg:mt-0 md:w-2/5">
                        <h1 className="text-3xl font-semibold">This Ben Hogan Men's Solid Ottoman Golf Polo Shirt</h1>
                        <div className="flex item-center mt-3">
                            <p className="text-[16px]">10k+ Sold</p>
                            <LuDot className="text-[24px] mx-1" />
                            <div className="flex items-center">
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-200 text-[18px]" />
                            </div>
                            <LuDot className="text-[24px] mx-1" />
                            <p className="text-[16px]">188 Review</p>
                        </div>
                        <p className="font-bold text-[35px] mt-3" >Rp 187.500</p>
                        <div className="flex">
                            <p className="text-pink-500	line-through font-semibold text-[18px]">Rp250.000</p>
                            <p className="text-emerald-500 text-[16px] ml-3 font-bold">25% off</p>
                        </div>
                        <div className="flex my-5">
                            <div className="mr-3 border-2 border-black rounded-lg">
                                <img className="w-full max-w-[60px]  h-[60px] object-cover rounded-lg" src={tshirt} alt="" />
                            </div>
                            <div className="border-2 border-gray-300 rounded-lg">
                                <img className="w-full max-w-[60px] h-[60px] object-cover rounded-lg" src={tshirt} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[18px] font-semibold">Select Size</p>
                            <p className="text-[18px] font-semibold text-gray-500">Size Guide</p>
                        </div>


                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-3">
                            <div className="px-6 py-1 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <button>S</button>
                            </div>
                            <div className="px-6 py-1 text-[16px] text-center font-semibold border border-gray-500 rounded-lg bg-gray-800 text-white">
                                <button>M</button>
                            </div>
                            <div className="px-6 py-1 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <button>L</button>
                            </div>
                            <div className="px-6 py-1 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <button>XL</button>
                            </div>
                            <div className="px-6 py-1 text-[16px] font-semibold text-center border border-gray-500 rounded-lg">
                                <button>2XL</button>
                            </div>
                            <div className="px-6 py-1 text-[16px] font-semibold text-center border border-gray-500 rounded-lg">
                                <button>3XL</button>
                            </div>

                        </div>

                        <div className="bg-gray-800 mt-5 font-semibold py-3 rounded-lg text-white text-center">
                            <a href="#">Buy This Item</a>
                        </div>
                        <div className="text-gray-800 font-semibold mt-3 border border-gray-800 py-3 rounded-lg  text-center">
                            <a href="#">Add to Bag</a>
                        </div>
                        <div className="flex gap-6 mt-3">
                            <div className="flex items-center pr-[20px] border-r border-gray-300">
                                <RiMessage2Line className="mr-1 text-[18px]"/>
                                <p>Chat</p>
                            </div>
                            <div className="flex items-center border-r pr-[20px] border-gray-300">
                                <CiHeart className="mr-1 text-[18px]" />
                                <p>Wishlist</p>
                            </div>
                            <div className="flex items-center">
                                <LiaShareAltSolid className="mr-1 text-[18px]" />
                                <p>Share</p>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}