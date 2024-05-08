import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Progress } from "flowbite-react";

import Tshirt from "../images/Isolated_white_t-shirt_front.jpg";
import Cap from "../images/cap.jpg";
import Bag from "../images/handbag.jpg";
import Shoes from "../images/Shoes.jpg";
import Jeans from "../images/jeans.jpg";


const CardsDetail = [
    { name: 'EliteShield Performance Men`s Tshirt', href: '#', image: Tshirt, dsprice: '255.000', orgprice: '525.000', progress: '9', progresspersentage:"90" },
    { name: 'Gentlemen`s Summer Gray Hat - Premium Blend', href: '#', image: Cap, dsprice: '99.000', orgprice: '150.000', progress: '9', progresspersentage: "90" },
    { name: 'HandBag', href: '#', image: Bag, dsprice: '250.000', orgprice: '425.000', progress: '5', progresspersentage: "50" },
    { name: 'Shoes', href: '#', image: Shoes, dsprice: '270.000', orgprice: '580.000', progress: '5', progresspersentage: "50" },
    { name: 'Jeans', href: '#', image: Jeans, dsprice: '270.000', orgprice: '580.000', progress: '4', progresspersentage: "40" },
]



export default function Salelider() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="py-5">
                <Slider {...settings} className="w-full max-w-[1440px] mx-auto">

                    {CardsDetail.map((item) => (

                        <div className="px-3 py-[50px]">
                            <div className="rounded-2xl shadow-lg">
                                <img src={item.image} className='w-full h-[330px] object-cover rounded-t-2xl' alt="" />
                                <div className="px-5 py-3 bg-white rounded-b-2xl">
                                    <h3 className="pb-3 text-gray-900 font-bold">
                                        <a
                                            key={item.name}
                                            href={item.href}
                                        >
                                            <div>
                                                {item.name}
                                            </div>

                                        </a>
                                    </h3>
                                    <div className="flex justify-start">
                                        <div className="pr-2 font-semibold	">
                                            Rp{item.dsprice}
                                        </div>
                                        <div className="line-through pl-2 text-pink-600	font-semibold	">
                                            Rp{item.orgprice}
                                        </div>


                                    </div>
                                    <hr className="mt-3 " />
                                    <div className="mt-3">
                                        <div className="flex items-center justify-between">
                                            <div className="w-[220px]"> <Progress progress={item.progresspersentage} /></div>
                                            <div>{item.progress}/10 Sale</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>



    );
}

