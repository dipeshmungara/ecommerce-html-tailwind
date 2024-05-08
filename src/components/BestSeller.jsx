
import { FaStar, FaHeart, FaCircle } from "react-icons/fa6";

import jeans from "../images/jeans.jpg";
import shirt from "../images/graphic-shirt-trendy-design-mockup(1).jpg";
import Shoes from "../images/Shoes.jpg";


const DealDetail =[
    { name: 'UrbanEdge Men`s Jeans Collection', image: jeans, rating: '4.9', soldCount: '10k', orgprice: 'Rp370.000', dsprice:'Rp253.000' },
    { name: 'Shirt', image: shirt, rating: '4.9', soldCount: '10k', dsprice:'Rp179.000' },
    { name: 'Shoes', image: Shoes, rating: '4.9', soldCount: '8k', orgprice: 'Rp325.000', dsprice:'Rp199.000' }
]

export default function BestSeller() {
    return (
        <>
            <div className="grid md:grid-cols-3 lg:grid-cols-4">
                {DealDetail.map((item, index) => (
                    <div key={index} className="px-3 py-[30px]">
                        <div className="relative rounded-2xl shadow-lg">
                            {/* Wishlist Heart Icon */}
                            <FaHeart className="absolute top-3 right-3 text-red-500 text-2xl cursor-pointer" />

                            {/* Image */}
                            <img src={item.image} className='w-full h-[330px] object-cover rounded-t-2xl' alt={item.name} />

                            {/* Details */}
                            <div className="px-5 py-3 bg-white rounded-b-2xl">
                                <h3 className="pb-3 text-gray-900 font-bold">
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </h3>
                                <div className="flex items-center">
                                    <div className="flex items-center text-black">
                                        <FaStar className="text-amber-500 mr-1 text-[20px]" />{item.rating}
                                    </div>
                                    <div className="mx-2">
                                        <FaCircle className="text-[5px]" />
                                    </div>
                                    <div>
                                        {item.soldCount}+ Sold
                                    </div>
                                </div>
                                <div className="flex justify-start my-3">
                                    <div className="pr-2 font-semibold text-black">
                                        {item.dsprice}
                                    </div>
                                    {item.orgprice && (
                                        <div className="line-through pl-2 text-pink-600 font-semibold">
                                            {item.orgprice}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
