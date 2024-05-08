import NikeSaeMall from "./NikeSaeMall";

import handbag from "../images/handbag.jpg";

export default function BestSellingStore() {
    return(
        <>
            <div className="w-full max-w-[1440px] mx-auto my-[50px]">
                <h3 className="text-center text-black font-bold text-[30px] mb-10">Best Selleing Store</h3>

                <div className="grid grid-cols-3">
                    <div>

                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={handbag} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">BeliBeli Mall</h5>
                                </a>
                                <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Shop, Explore, Delight and Experience Mall Magic!</p>
                                
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 col-span-2">
                        <div>{<NikeSaeMall />}</div>
                        <div>c</div>
                        <div>d</div>
                        <div>e</div>
                    </div>
                </div>
            </div>
        

        
        
        </>
    )
}