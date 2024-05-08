import Header from './components/Header'
import Slider from './components/Slider';
import Category from "./components/Category";
import SaleTimer from "./components/SaleTimer";
import Salelider from "./components/FlashSaleSlider";
import TodayDeal from "./components/TodaysDealTab";
import BestSellingStore from "./components/BestSellingStore";

export default function App() {
  return (
    <>
      <div className='pt-5  w-full px-3 lg:px-0'>
        <Header />
        <Slider />
        <Category />
        <div className='bg-gray-100'>
          <SaleTimer />
          <Salelider />
        </div>
        <TodayDeal />
        <BestSellingStore />
      </div>
    </>
  )
}