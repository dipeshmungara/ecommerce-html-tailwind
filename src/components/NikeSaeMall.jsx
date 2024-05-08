import cap from "../images/cap.jpg";
import { LuCrown } from "react-icons/lu";


export default function NikeSaeMall() {
    return (
        <>

            <div>
                <div className="flex items-center">
                    <div className="relative">
                        <img src={cap} alt="" className="w-full max-w-[80px] h-[80px] rounded-full" />
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
            </div>

        </>
    )
}