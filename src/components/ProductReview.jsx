import { Progress } from "flowbite-react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Rating } from "flowbite-react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";





export default function ProductReview() {
    return (
        <>
            <div className="w-full max-w-[1440px] mx-auto my-5">
                <h2 className="text-[22px] font-semibold text-gray-900">Customer Reviews</h2>
                <div className="lg:flex md:flex border border-gray-300 rounded-lg mt-5 py-5 shadow-sm">
                    <div className="w-2/5 flex">
                        <div className="lg:w-1/3 md:w-1/3">

                            {/* Circular Progress  */}
                            <div class="relative w-[15rem] h-[6rem]">
                                <svg class="size-full" width="25" height="25" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    
                                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                            
                                    <g class="origin-center -rotate-90 transform">
                                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-800 dark:text-blue-500" stroke-width="2" stroke-dasharray="170" stroke-dashoffset="75"></circle>
                                    </g>
                                </svg>
                            
                                <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <span class="text-center text-2xl font-bold text-gray-800 dark:text-white">4.8</span>
                                </div>
                            </div>
                            {/* End Circular Progress  */}


                        </div>
                        <div className="lg:w-2/3 md:w-2/3">
                            <div className="flex">
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStarHalfAlt className="text-amber-400 text-[18px]" />
                            </div>
                            <p className="text-[18px] font-semibold text-gray-900 mt-3">95% of Buyers are satisfied</p>
                            <p className="mt-2">
                                <Rating>
                                    <p className="text-sm font-medium text-gray-500 dark:text-white">98 rating</p>
                                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                                    <p className="text-sm font-medium text-gray-500  dark:text-white">
                                        125 reviews
                                    </p>
                                </Rating>
                            </p>
                        </div>
                    </div>
                    <div className="w-3/10 border-x border-gray-300 px-5 mt-5 lg:mt-0 md:mt-0">
                        <div className="flex items-center gap-2">
                            <FaStar className="text-amber-400 text-[18px]" />
                            <p>5</p>
                            <Progress className="w-[180px]" color="dark" size="sm" progress={75} />
                            <p>136</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-amber-400 text-[18px]" />
                            <p>4</p>
                            <Progress className="w-[180px]" color="dark" size="sm" progress={30} />
                            <p>33</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-amber-400 text-[18px]" />
                            <p>3</p>
                            <Progress className="w-[180px]" color="dark" size="sm" progress={15} />
                            <p>9</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-amber-400 text-[18px]" />
                            <p>2</p>
                            <Progress className="w-[180px]" color="dark" size="sm" progress={20} />
                            <p>10</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-amber-400 text-[18px]" />
                            <p>1</p>
                            <Progress className="w-[180px]" color="dark" size="sm" progress={8} />
                            <p>2</p>
                        </div>

                    </div>
                    <div className="lg:w-2/5 md:w-2/5 px-2 lg:px-8">

                        <div className="flex w-full items-center gap-4 my-3 lg:my-0 lg:mb-3">
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg bg-gray-800 text-white">
                                <a href="#">All (190)</a>
                            </div>
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">Pic Review (12)</a>
                            </div>
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">Fast Shipping (12)</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 my-3">
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">5 Star (136)</a>
                            </div>
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">4 Star (33)</a>
                            </div>
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">3 Star (9)</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 my-3">
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">2 Star (10)</a>
                            </div>
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">1 Star (2)</a>
                            </div>
                            <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                                <a href="#">Good Quality (12)</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lg:flex md:flex my-5 flex-wrap justify-between">
                    <div className="w-full lg:w-[49%] md:w-[49%] h-fit border p-5 border-gray-300 rounded-lg my-3 shadow-sm">
                        <div className="flex  justify-between">
                            <div className="flex">
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                            </div>
                            <p className="text-[16px] text-gray-500 font-semibold">08 August 2023</p>
                        </div>
                        <h2 className="text-[22px] font-bold text-gray-800">His Favorite shirt!</h2>
                        <div className="flex items-center">
                            <p className="text-[16px] text-gray-500 font-semibold">Color : Black</p>
                            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <p className="text-[16px] text-gray-500 font-semibold">Size : XL</p>
                        </div>
                        <p className="text-[16px] text-gray-500 font-semibold mt-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit rerum totam quae itaque vitae! Perferendis fugiat placeat, veniam atque sunt accusamus velit. Nesciunt in voluptatum ea. Dolor rem in velit?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident assumenda sunt alias non rem architecto, neque aperiam minus nam vel, beatae repellendus! Officia totam corrupti, nostrum ducimus ipsam mollitia?
                        </p>


                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex items-center">
                                <BiSolidLike className="text-[25px] text-gray-400" />
                                <p className="ml-2">22</p>
                            </div>
                            <div className="flex items-center">
                                <BiSolidDislike className="text-[25px] text-gray-400" />
                                <p className="ml-2">0</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full lg:w-[49%] md:w-[49%] h-fit border p-5 border-gray-300 rounded-lg my-3 shadow-sm">
                        <div className="flex  justify-between">
                            <div className="flex">
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                            </div>
                            <p className="text-[16px] text-gray-500 font-semibold">08 August 2023</p>
                        </div>
                        <h2 className="text-[22px] font-bold text-gray-800">His Favorite shirt!</h2>
                        <div className="flex items-center">
                            <p className="text-[16px] text-gray-500 font-semibold">Color : Black</p>
                            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <p className="text-[16px] text-gray-500 font-semibold">Size : XL</p>
                        </div>
                        <p className="text-[16px] text-gray-500 font-semibold mt-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit rerum totam quae itaque vitae! Perferendis fugiat placeat, veniam atque sunt accusamus velit. Nesciunt in voluptatum ea. Dolor rem in velit?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque quidem iure nisi eos aspernatur itaque exercitationem quo, totam mollitia ad dignissimos fugiat illo reprehenderit vero nostrum voluptatem omnis tempore?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident assumenda sunt alias non rem architecto, neque aperiam minus nam vel, beatae repellendus! Officia totam corrupti, nostrum ducimus ipsam mollitia?
                        </p>


                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex items-center">
                                <BiSolidLike className="text-[25px] text-gray-400" />
                                <p className="ml-2">22</p>
                            </div>
                            <div className="flex items-center">
                                <BiSolidDislike className="text-[25px] text-gray-400" />
                                <p className="ml-2">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[49%] md:w-[49%] h-fit border p-5 border-gray-300 rounded-lg my-3 shadow-sm">
                        <div className="flex  justify-between">
                            <div className="flex">
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                            </div>
                            <p className="text-[16px] text-gray-500 font-semibold">08 August 2023</p>
                        </div>
                        <h2 className="text-[22px] font-bold text-gray-800">His Favorite shirt!</h2>
                        <div className="flex items-center">
                            <p className="text-[16px] text-gray-500 font-semibold">Color : Black</p>
                            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <p className="text-[16px] text-gray-500 font-semibold">Size : XL</p>
                        </div>
                        <p className="text-[16px] text-gray-500 font-semibold mt-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit rerum totam quae itaque vitae! Perferendis fugiat placeat, veniam atque sunt accusamus velit. Nesciunt in voluptatum ea. Dolor rem in velit?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident assumenda sunt alias non rem architecto, neque aperiam minus nam vel, beatae repellendus! Officia totam corrupti, nostrum ducimus ipsam mollitia?
                        </p>


                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex items-center">
                                <BiSolidLike className="text-[25px] text-gray-400" />
                                <p className="ml-2">22</p>
                            </div>
                            <div className="flex items-center">
                                <BiSolidDislike className="text-[25px] text-gray-400" />
                                <p className="ml-2">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[49%] md:w-[49%] h-fit border p-5 border-gray-300 rounded-lg my-3 shadow-sm">
                        <div className="flex  justify-between">
                            <div className="flex">
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                                <FaStar className="text-amber-400 text-[18px]" />
                            </div>
                            <p className="text-[16px] text-gray-500 font-semibold">08 August 2023</p>
                        </div>
                        <h2 className="text-[22px] font-bold text-gray-800">His Favorite shirt!</h2>
                        <div className="flex items-center">
                            <p className="text-[16px] text-gray-500 font-semibold">Color : Black</p>
                            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <p className="text-[16px] text-gray-500 font-semibold">Size : XL</p>
                        </div>
                        <p className="text-[16px] text-gray-500 font-semibold mt-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit rerum totam quae itaque vitae! Perferendis fugiat placeat, veniam atque sunt accusamus velit. Nesciunt in voluptatum ea. Dolor rem in velit?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident assumenda sunt alias non rem architecto, neque aperiam minus nam vel, beatae repellendus! Officia totam corrupti, nostrum ducimus ipsam mollitia?
                        </p>


                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex items-center">
                                <BiSolidLike className="text-[25px] text-gray-400" />
                                <p className="ml-2">22</p>
                            </div>
                            <div className="flex items-center">
                                <BiSolidDislike className="text-[25px] text-gray-400" />
                                <p className="ml-2">0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="#" className="px-8 py-2 border border-gray-500 text-gray-800 rounded-lg font-semibold text-[16px]">See All Review</a>
                </div>
            </div>
        </>
    )
}