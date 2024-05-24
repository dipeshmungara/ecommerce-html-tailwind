
import ProductDescription from "./ProductDescription";
import ProductStylingIdeas from "./ProductStylingIdeas";
import ProductReview from "./ProductReview";

export default function ProductInfo() {
    return (
        <>

            <div className="w-full max-w-[1440px] mx-auto my-8">
                <div className="lg:flex md:flex items-center gap-4 my-3">
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg bg-gray-800 text-white">
                        <a href="#product_detail">Description</a>
                    </div>
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                        <a href="#styling_ideas">Styling Ideas</a>
                    </div>
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                        <a href="#product_review">Review</a>
                    </div>
                    <div className="px-6 py-2 my-2 lg:my-0 md:my-0 text-[16px] text-center font-semibold border border-gray-500 rounded-lg">
                        <a href="#">Best Seller</a>
                    </div>

                </div>

                
            </div>
            <div id="product_detail">
                <ProductDescription />
            </div>
            <div id="styling_ideas">
                <ProductStylingIdeas />
            </div>
            <div id="product_review">
                <ProductReview />
            </div>

        </>
    );
}
