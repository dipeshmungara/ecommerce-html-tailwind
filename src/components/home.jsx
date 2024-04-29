
import { Carousel } from "flowbite-react";
import Clothes1 from "../images/hip-bearded-young-man-putting-blank-sheet-paper-into-huge-front-pocket-his-red-gray-anorak-white-wall.jpg"
export default function Home() {
    const backgroundImg1 = {
        backgroundImage:
            "url('https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg')",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const backgroundImg2 = {
        backgroundImage:
            "url('https://img.freepik.com/free-vector/fashion-man-set_1284-16523.jpg?t=st=1714389454~exp=1714393054~hmac=1bd48c098712036ab3ef478b3e04a3fe0cc3e4bfebc4297b652a2b3d0468123e&w=826')",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    const backgroundImg3 = {
        backgroundImage:
            "url('https://img.freepik.com/free-photo/young-man-choosing-cloths-menswear-shop_1303-30814.jpg?t=st=1714389353~exp=1714392953~hmac=79033f34213d800da416ac628cdf56108d6e07d67b5c29dccf8b8d946448516f&w=900')",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div className="sm:h-[400px] lg:h-[600px]">
            <Carousel>
                <div className="flex h-full items-center justify-start dark:text-white" style={backgroundImg1}>
                    <div className="w-full max-w-[1440px] mx-auto">
                        <h3>#Big Fashion Sale</h3>
                        <h1>Limited TIme Offer! <br /> Up To 50% OFF!</h1>
                    </div>
                </div>
                <div className="flex h-full items-center justify-start bg-gray-400 dark:bg-gray-700 dark:text-white" style={backgroundImg2} >
                    <div className="w-full max-w-[1440px] mx-auto">
                        <h3>#Big Fashion Sale</h3>
                        <h1>Limited TIme Offer! <br /> Up To 50% OFF!</h1>
                    </div>
                </div>
                <div className="flex h-full items-center justify-start bg-gray-400 dark:bg-gray-700 dark:text-white" style={backgroundImg3}>
                    <div className="w-full max-w-[1440px] mx-auto">
                        <h3>#Big Fashion Sale</h3>
                        <h1>Limited TIme Offer! <br /> Up To 50% OFF!</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
