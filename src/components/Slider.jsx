"use client"
import { Carousel } from "flowbite-react";
import Clothes1 from "../images/Shoes.jpg"


export default function Component() {
    const backgroundImg1 = {
        backgroundImage:
            "url("+{Clothes1}+")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const backgroundImg2 = {
        backgroundImage:
            "url('https://img.freepik.com/free-vector/fashion-man-set_1284-16523.jpg?t=st=1714389454~exp=1714393054~hmac=1bd48c098712036ab3ef478b3e04a3fe0cc3e4bfebc4297b652a2b3d0468123e&w=826')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const backgroundImg3 = {
        backgroundImage:
            "url('https://img.freepik.com/free-photo/young-man-choosing-cloths-menswear-shop_1303-30814.jpg?t=st=1714389353~exp=1714392953~hmac=79033f34213d800da416ac628cdf56108d6e07d67b5c29dccf8b8d946448516f&w=900')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="h-[300px] sm:h-[300px] lg:h-[600px] xl:h-80 2xl:h-96">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)} >
                <div className="flex h-full items-center justify-start bg-gray-400 dark:bg-gray-700 bg-blend-multiply text-white" style={backgroundImg1}>
                    <div className="w-full max-w-[1440px] mx-auto">
                        <h3 className="text-[20px] lg:text-[25px] leading-3 text-gray-800">#Big Fashion Sale</h3>
                        <h1 className="text-[30px] lg:text-[50px] leading-[1.2em]">Limited Time Offer! <br />Up To 50% OFF! </h1>
                    </div>
                </div>
                <div className="flex h-full items-center justify-start bg-gray-400 dark:bg-gray-700 bg-blend-multiply" style={backgroundImg2} >
                    <div className="w-full max-w-[1440px] mx-auto text-white">
                        <h3 className="text-[20px] lg:text-[25px] leading-3 text-gray-800">#Big Fashion Sale</h3>
                        <h1 className="text-[30px] lg:text-[50px] leading-[1.2em]">Limited Time Offer! <br />Up To 50% OFF! </h1>
                    </div>
                </div>
                <div className="flex h-full items-center justify-start bg-gray-400 dark:bg-gray-700 bg-blend-multiply text-white" style={backgroundImg3}>
                    <div className="w-full max-w-[1440px] mx-auto">
                        <h3 className="text-[20px] lg:text-[25px] leading-3 text-gray-800">#Big Fashion Sale</h3>
                        <h1 className="text-[30px] lg:text-[50px] leading-[1.2em]">Limited Time Offer! <br />Up To 50% OFF! </h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}