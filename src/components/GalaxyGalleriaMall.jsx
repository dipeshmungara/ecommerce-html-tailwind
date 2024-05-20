import cap from "../images/cap.jpg";
import { LuCrown } from "react-icons/lu";
import handbag from "../images/handbag.jpg"
import Tshirt from "../images/Isolated_white_t-shirt_front.jpg";


export default function GalaxyGalleriaMall() {
    return (
        <>

            <div className="border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 p-5">
                <div className="flex items-center">
                    <div className="relative">
                        <img src={cap} alt="" className="w-full max-w-[80px] h-[80px] rounded-full object-cover" />
                        <div class="absolute top-[40px] inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                            <LuCrown  className="text-[20px]"/>
                        </div>
                    </div>
                    <div className="ml-7">
                        <h3 className="text-black font-bold text-[24px]">Nike Sae Mall</h3>
                        <p className="text-gray-500 text-[18px] font-medium">
                            "Just do it bro!"
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-5 gap-4">
                    <div className="">
                        <img src={handbag} className="w-full h-[130px] rounded-xl object-cover" alt="" />
                        <p className="font-medium mt-2 text-[18px] text-center">
                            Rp650.000
                        </p>
                    </div>
                    <div>
                        <img src={cap} className="w-full h-[130px] rounded-xl object-cover" alt="" />
                        <p className="font-medium mt-2 text-[18px] text-center">
                            Rp99.000
                        </p>
                    </div>
                    <div>
                        <img src={Tshirt} className="w-full h-[130px] rounded-xl object-cover" alt="" />
                        <p className="font-medium mt-2 text-[18px] text-center">
                            Rp270.000
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}