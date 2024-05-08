
import { Tabs } from "flowbite-react";
import BestSeller from "./BestSeller";
import KeepStylish from "./KeepStylish";

export default function TodayDeal() {
    return (
        <>

            <div className="w-full max-w-[1440px] mx-auto my-[50px]">
                
                <div className="flex">
                    <div>
                        <Tabs aria-label="Pills" style="pills">
                            <Tabs.Item active title="Best Seller">
                                <p className="text-sm text-gray-500 dark:text-gray-400">< BestSeller /></p>
                            </Tabs.Item>
                            <Tabs.Item title="Keep Stylish">
                                <p className="text-sm text-gray-500 dark:text-gray-400"><KeepStylish /></p>
                            </Tabs.Item>
                            <Tabs.Item title="Special Discount">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                            </Tabs.Item>
                            <Tabs.Item title="Official Store">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
                            </Tabs.Item>
                            <Tabs.Item title="Coveted Product">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
                            </Tabs.Item>
                        </Tabs>
                    </div>
                </div>
            </div>

        </>
    );
}
