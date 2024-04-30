"use client";

import { Card } from "flowbite-react";
import { Progress } from "flowbite-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import Slider from "react-slick";

import Tshirt from "../images/Isolated_white_t-shirt_front.jpg";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className="w-full max-w-[1440px] mx-auto">
            <div>
                <Card
                    className="max-w-sm"
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc={Tshirt}
                >
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            ELiteShield Performance Men's Jackets
                        </h5>
                    </a>
                    <div className="flex items-center">
                        <span className="text-3xl mr-3 font-bold text-gray-900 dark:text-white">Rp255.000</span>
                        <span className=" font-bold text-pink-700 line-through dark:text-white">Rp525.000</span>
                    </div>
                    <hr />
                   <div>
                        <Progress progress={90} />
                        <span>9/10 Sale</span>
                   </div>
                </Card>
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
}
