import Header from '../components/Header'
import Footer from "../components/footer";
import ProductCatlog from '../components/ProductCatlog';
import ProductInfo from '../components/ProductInfoTab'

export default function Product() {
    return (
        <>
            <div className='w-full px-3 lg:px-0'>
                <Header />
                <ProductCatlog />
                <ProductInfo />
                <Footer />
            </div>
        </>
    )
}