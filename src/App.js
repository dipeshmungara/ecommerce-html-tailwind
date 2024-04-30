import Header from './components/Header'
import Slider from './components/Slider';
import Category from "./components/Category";
import FlashSale from "./components/FlashSale";

export default function App() {
  return (
    <>
      <div className='pt-5  w-full px-3 lg:px-0'>
        <Header />
        <Slider />
        <Category />
        <FlashSale />
      </div>
    </>
  )
}