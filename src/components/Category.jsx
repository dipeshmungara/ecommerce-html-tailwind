import Tshirt from "../images/black-tshirt-light-background.jpg";
import Jacket from "../images/still-life-rendering-jackets-display(1).jpg";
import Shirt from "../images/graphic-shirt-trendy-design-mockup(1).jpg";
import Jeans from "../images/jeans.jpg";
import Bag from "../images/handbag.jpg";
import Shoes from "../images/Shoes.jpg";
import Watches from "../images/watch-silver-golden.jpg";
import Cap from "../images/cap.jpg";



const category = [
    {
        name: 'T-shirt', href: '#', image: Tshirt,
    },
    {
        name: 'Jacket', href: '#', image: Jacket,
    },
    {
        name: 'Shirt', href: '#', image: Shirt,
    },
    {
        name: 'Jeans', href: '#', image: Jeans,
    },
    {
        name: 'Bag', href: '#', image: Bag,
    },
    {
        name: 'Shoes', href: '#', image: Shoes,
    },
    {
        name: 'Watches', href: '#', image: Watches,
    },
    {
        name: 'Cap', href: '#', image: Cap,
    },
    {
        name: 'All Category', href: '#', image: Cap,
    },
]

export default function Category() {
    return (
        <>
            <div className="md:flex lg:flex w-full max-w-[1440px] justify-between mx-auto py-12">

                {category.map((item) => (
                    <div className="grid mx-5 justify-center">

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
        </>
    )

}