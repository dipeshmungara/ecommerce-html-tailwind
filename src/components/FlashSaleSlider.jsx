"use client";

import { Card } from "flowbite-react";
import { Progress } from "flowbite-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import React from "react";
import Slider from "react-slick";

import Tshirt from "../images/Isolated_white_t-shirt_front.jpg";
import Cap from "../images/cap.jpg";
import Bag from "../images/handbag.jpg";
import Shoes from "../images/Shoes.jpg";


const CardsDetail = [
    { name: 'Tshirt', href: '#', image: Tshirt },
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
            

            <Slider {...settings} className="w-full max-w-[1440px] mx-auto">
                <div className="p-3">
                    {CardsDetail.map((item) => (
                        
                        <div>
                            <img src={item.image} className=' h-[90px] w-[90px] rounded-[50%] object-cover' alt="" />
                            <h3 className="text-center py-2 text-gray-900 font-bold">
                                <a
                                    key={item.name}
                                    href={item.href}
                                >
                                    {item.name}
                                </a>
                            </h3>
                        </div>
                    ))}
                </div>
              
            </Slider>






        </>



    );
}








