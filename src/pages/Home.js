import Header from '../components/Header'
import Slider from '../components/Slider';
import Category from "../components/Category";
import SaleTimer from "../components/SaleTimer";
import Salelider from "../components/FlashSaleSlider";
import TodayDeal from "../components/TodaysDealTab";
import BestSellingStore from "../components/BestSellingStore";
import Quote from "../components/Quote";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <div className='w-full px-3 lg:px-0'>
                <Header />
                <Slider />
                <Category />
                <div className='bg-gray-100'>
                    <SaleTimer />
                    <Salelider />
                </div>
                <TodayDeal />
                <BestSellingStore />
                <Quote />
                <Footer />
            </div>
        </>
    )
}