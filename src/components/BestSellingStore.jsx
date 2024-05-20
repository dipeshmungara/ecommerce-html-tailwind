import NikeSaeMall from "./NikeSaeMall";
import handbag from "../images/handbag.jpg";
import BarudakDisasterMall from "./BarudakDisasterMall";
import GalaxyGalleriaMall from "./GalaxyGalleriaMall";
import AuroraWellMall from "./AuroraWellMall";

export default function BestSellingStore() {
    return(
        <>
            <div className="w-full max-w-[1440px] mx-auto my-[50px]">
                <h3 className="text-center text-black font-bold text-[30px] mb-10">Best Selleing Store</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3">
               

                        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={handbag} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">BeliBeli Mall</h5>
                                </a>
                                <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Shop, Explore, Delight and Experience Mall Magic!</p>
                                
                            </div>
                        </div>

                    <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 col-span-2 gap-6">
                        <NikeSaeMall />
                        <BarudakDisasterMall />
                        <GalaxyGalleriaMall />
                        <AuroraWellMall />
                    </div>
                </div>
            </div>
        

        
        
        </>
    )
}