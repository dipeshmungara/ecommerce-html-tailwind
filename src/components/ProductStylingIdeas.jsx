import Tshirt from "../images/black-tshirt-light-background.jpg";
import { IoMdAddCircle } from "react-icons/io";


export default function ProductStylingIdeas() {
    return (
        <>

            <div className="w-full max-w-[1350px]  mx-auto">
                <div className="lg:flex md:flex items-center">
                    <div className="lg:w-3/4 border-r py-8 border-gray-400">
                        <div className="flex justify-between pr-6">
                            <h2 className="text-gray-800 font-semibold text-[18px]">Styling Ideas</h2>
                            <p className="text-[16px] font-medium">See More</p>
                        </div>
                        <div className="lg:flex md:flex my-3  gap-4 items-center lg:pr-6 p-2">
                            <div className="lg:w-3/12 justify-center grid ">
                                <img src={Tshirt} className="w-full max-w-[280px] h-[320px] rounded-xl object-cover" alt="" />
                            </div>
                            <div className="lg:w-1/14 my-5 lg:my-0 md:my-0 justify-center grid">
                                <IoMdAddCircle className="text-[40px]" />
                            </div>
                            <div className="lg:w-9/12 md:w-9/12 lg:flex md:flex border border-gray-400 rounded-lg">
                                <div className="border-r border-gray-300 ">
                                    <img src={Tshirt} className="h-[180px] object-cover w-full rounded-tl-lg" alt="" />
                                    <div className="p-3 bg-white rounded-bl-lg">
                                        <h5 className="text-[18px] font-bold tracking-tight text-gray-600 dark:text-white">
                                            George Men's and Big  Men's 100% Cotton
                                        </h5>
                                        <p className="text-gray-900 text-[20px] font-semibold mt-3">
                                            Rp220.000
                                        </p>
                                        <p className="text-pink-700 text-[16px] font-semibold">
                                            Rp220.000
                                        </p>
                                    </div>
                                </div>

                                <div className="border-r border-gray-300">
                                    <img src={Tshirt} alt="" className="h-[180px] w-full object-cover" />
                                    <div className="p-3 bg-white">
                                        <h5 className="text-[18px] font-bold tracking-tight text-gray-600 dark:text-white">
                                            George Men's and Big  Men's 100% Cotton
                                        </h5>
                                        <p className=" text-gray-900 text-[20px] font-semibold mt-3">
                                            Rp220.000
                                        </p>
                                        <p className="text-pink-700 text-[16px] font-semibold">
                                            Rp220.000
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <img src={Tshirt} alt="" className="h-[180px] object-cover w-full rounded-tr-lg" />
                                    <div className="p-3 bg-white rounded-br-lg">
                                        <h5 className="text-[18px] font-bold tracking-tight text-gray-600 dark:text-white">
                                            George Men's and Big  Men's 100% Cotton
                                        </h5>
                                        <p className="text-gray-900 text-[20px] font-semibold mt-3">
                                            Rp220.000
                                        </p>
                                        <p className="text-pink-700 text-[16px] font-semibold">
                                            Rp220.000
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/4 lg:p-8 md:p-8 pb-8 text-center">
                        <p className="text-[16px] font-medium">Total</p>
                        <p className="text-[22px] font-semibold text-gray-900">Rp1.187.500</p>
                        <p className="text-[16px] text-green-500 font-medium">Save Rp607.500</p>
                        <button className="bg-gray-900 text-white px-5 py-2 rounded-lg mt-4">
                            <a href="#">Add to bag</a>
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}