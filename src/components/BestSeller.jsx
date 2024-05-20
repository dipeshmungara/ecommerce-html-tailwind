import { useState } from "react";
import { FaStar, FaHeart, FaCircle } from "react-icons/fa";
import jeans from "../images/jeans.jpg";
import shirt from "../images/graphic-shirt-trendy-design-mockup(1).jpg";
import Shoes from "../images/Shoes.jpg";

const dealDetails = [
    { name: 'UrbanEdge Men`s Jeans Collection', image: jeans, rating: '4.9', soldCount: '10k', orgPrice: 'Rp370.000', dsPrice: 'Rp253.000' },
    { name: 'Shirt', image: shirt, rating: '4.9', soldCount: '10k', dsPrice: 'Rp179.000' },
    { name: 'Shoes', image: Shoes, rating: '4.9', soldCount: '8k', orgPrice: 'Rp325.000', dsPrice: 'Rp199.000' }
];

export default function BestSeller() {
    // Initialize state for wishlist status of each item
    const [wishlist, setWishlist] = useState(dealDetails.map(() => false));

    // Handle clicking the wishlist heart icon
    const handleWishlistClick = (index) => {
        // Toggle the wishlist status for the clicked item
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist];
            updatedWishlist[index] = !updatedWishlist[index];
            return updatedWishlist;
        });
    };

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {dealDetails.map((item, index) => (
                <div key={index} className="px-3 py-[30px]">
                    <div className="relative rounded-2xl shadow-lg">
                        {/* Wishlist Heart Icon */}
                        <FaHeart
                            className={`absolute top-3 right-3 text-2xl cursor-pointer ${wishlist[index] ? "text-red-500" : "text-gray-300"}`}
                            onClick={() => handleWishlistClick(index)}
                        />

                        {/* Item Image */}
                        <img src={item.image} className='w-full h-[330px] object-cover rounded-t-2xl' alt={item.name} />

                        {/* Item Details */}
                        <div className="px-5 py-3 bg-white rounded-b-2xl">
                
                                <a href={item.href} className="pb-3 text-gray-900 font-bold">
                                    {item.name}
                                </a>
                            
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
                                    {item.dsPrice}
                                </div>
                                {item.orgPrice && (
                                    <div className="line-through pl-2 text-pink-600 font-semibold">
                                        {item.orgPrice}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
