export default function ProductDescription() {
    return (
        <>

            <div className="w-full max-w-[1440px] mx-auto mt-5">
                <h2 className="font-semibold text-[22px]">Product Detail</h2>
                <p className="text-gray-400 mt-2 font-medium text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione incidunt neque. Ducimus architecto corrupti, voluptatem ratione nostrum atque. Provident, labore quod nihil fuga voluptatibus pariatur amet voluptatem recusandae necessitatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione incidunt neque. Ducimus architecto corrupti, voluptatem ratione nostrum atque. Provident, labore quod nihil fuga voluptatibus pariatur amet voluptatem recusandae necessitatibus.
                </p>
                <table className="mt-2"> 
                    <tr>
                        <td className="text-gray-400 font-medium text-[16px]">Package Dimensions</td>
                        <td className="px-3">:</td>
                        <td className="text-gray-800 font-medium text-[16px]">27.3 * 24.8 * 4.9 cm; 180g</td>
                    </tr>
                    <tr>
                        <td className="text-gray-400 font-medium text-[16px]">Specification</td>
                        <td className="px-3">:</td>
                        <td className="text-gray-800 font-medium text-[16px]">Moisture Wicking, Stretchy, SPF/UV Protection, Eye Care</td>
                    </tr>
                    <tr>
                        <td className="text-gray-400 font-medium text-[16px]">Date First Available</td>
                        <td className="px-3">:</td>
                        <td className="text-gray-800 font-medium text-[16px]">August 08, 2023</td>
                    </tr>
                    <tr>
                        <td className="text-gray-400 font-medium text-[16px]">Department</td>
                        <td className="px-3">:</td>
                        <td className="text-gray-800 font-medium text-[16px]">Mens</td>
                    </tr>
                </table>

            </div>

        </>
    )
}