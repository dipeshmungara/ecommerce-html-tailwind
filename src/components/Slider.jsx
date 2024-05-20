"use client"
import { Carousel } from "flowbite-react";
import Tshirt from "../images/black-tshirt-light-background.jpg"
import Shirt from "../images/hip-bearded-young-man-putting-blank-sheet-paper-into-huge-front-pocket-his-red-gray-anorak-white-wall.jpg";
import Jeans from "../images/jeans.jpg";

export default function Component() {

    const backgroundImg1 = {
        backgroundImage:
            `url(${Tshirt})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const backgroundImg2 = {
        backgroundImage: `url(${Shirt})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const backgroundImg3 = {
        backgroundImage: `url(${Jeans})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="h-[300px] sm:h-[300px] lg:h-[600px] xl:h-80 2xl:h-96">
            <Carousel >
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