import Tshirt from "../images/black-tshirt-light-background.jpg";
import Jacket from "../images/still-life-rendering-jackets-display(1).jpg";
import Shirt from "../images/graphic-shirt-trendy-design-mockup(1).jpg";
import Jeans from "../images/jeans.jpg";
import Bag from "../images/handbag.jpg";
import Shoes from "../images/Shoes.jpg";
import Watches from "../images/watch-silver-golden.jpg";
import Cap from "../images/cap.jpg";



export default function Category() {
    return (
        <>
            <div className="flex w-full max-w-[1440px] justify-between mx-auto py-12">
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Tshirt} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">T-shirt</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Jacket} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Jacket</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Shirt} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Shirt</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Jeans} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Jeans</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Bag} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Bag</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Shoes} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Shoes</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Watches} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Watches</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Cap} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">Cap</a></h3>
                </div>
                <div className="mx-5">
                    <img className=' h-[90px] w-[90px] rounded-[50%] object-cover' src={Jacket} alt="" />
                    <h3 className="text-center py-2 text-gray-900 font-bold"><a href="#">All Category</a></h3>
                </div>
                
            </div>
        </>
    )
    
}