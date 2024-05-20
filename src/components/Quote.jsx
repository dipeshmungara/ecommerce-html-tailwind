import HipBearded from "../images/hip-bearded-young-man-putting-blank-sheet-paper-into-huge-front-pocket-his-red-gray-anorak-white-wall.jpg";

export default function Quote() {
    const Quotebackimg={
        backgroundImage:
            "url('https://img.freepik.com/free-photo/young-man-choosing-cloths-menswear-shop_1303-30814.jpg?t=st=1714389353~exp=1714392953~hmac=79033f34213d800da416ac628cdf56108d6e07d67b5c29dccf8b8d946448516f&w=900')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <>
            <div className="w-full h-[400px] flex items-center justify-center bg-gray-400  dark:bg-gray-700 bg-blend-multiply" style={Quotebackimg}>
            <div className=" w-full max-w-[1440px] mx-auto ">
                       <h2 className="text-[36px] text-center text-white font-semibold	">"Let's Shop Beyond Boundaries"</h2>
                    </div>
                </div>     
        </>
    )
}