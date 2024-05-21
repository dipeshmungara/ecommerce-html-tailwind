
import ProductDescription from "./ProductDescription";
import ProductStylingIdeas from "./ProductStylingIdeas";
import ProductReview from "./ProductReview";

export default function ProductInfo() {
    return (
        <>

            <div className="w-full max-w-[1440px] mx-auto my-8">
                <div className="lg:flex md:flex items-center gap-4 my-3">
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg bg-gray-800 text-white">
                        <a href="#">Description</a>
                    </div>
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                        <a href="#">Styling Ideas</a>
                    </div>
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                        <a href="#">Review</a>
                    </div>
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                        <a href="#">Best Seller</a>
                    </div>

                </div>

                
            </div>.<div className="product_detail">
                <ProductDescription />
            </div>
            <div className="styling_ideas w-full max-w-[1500px] bg-gray-300 my-5">
                <ProductStylingIdeas />
            </div>
            <div className="product_review">
                <ProductReview />
            </div>

        </>
    );
}
