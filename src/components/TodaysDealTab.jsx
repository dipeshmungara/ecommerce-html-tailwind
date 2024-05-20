
import { Tabs } from "flowbite-react";
import BestSeller from "./BestSeller";
import KeepStylish from "./KeepStylish";

export default function TodayDeal() {
    return (
        <>

            <div className="w-full max-w-[1440px] mx-auto my-[50px]">
                
                <div className="flex">
                 
                        <Tabs aria-label="Pills" style="pills">
                            <Tabs.Item active title="Best Seller">
                                <div className="text-sm text-gray-500 dark:text-gray-400">< BestSeller /></div>
                            </Tabs.Item>
                            <Tabs.Item title="Keep Stylish">
                                <div className="text-sm text-gray-500 dark:text-gray-400"><KeepStylish /></div>
                            </Tabs.Item>
                            <Tabs.Item title="Special Discount">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Content 3</div>
                            </Tabs.Item>
                            <Tabs.Item title="Official Store">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Content 4</div>
                            </Tabs.Item>
                            <Tabs.Item title="Coveted Product">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Content 5</div>
                            </Tabs.Item>
                        </Tabs>
                  
                </div>
            </div>

        </>
    );
}
