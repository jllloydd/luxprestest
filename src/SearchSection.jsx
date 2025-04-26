import searchimg from '/searchimg.jpg'

function SearchSection(){
    return(
        <>
        <section id="search">

            <div className="grid grid-cols-2 bg-slate-900">
                <img src={searchimg} className="w-[900px] h-full" alt="" />
                <div className="px-12 py-6">
                <h1 className="text-3xl dm-bold text-center text-white">Find Your Dream Home</h1>
                <form className="mt-6 space-y-4 bg-white px-12 py-12 rounded-lg shadow-lg manrope">
                    <div className="grid grid-cols-2 gap-4">
                    
                        <div>
                            <label className="block mb-1 manrope-bold">Location</label>
                            <select className="w-full p-2 border rounded">
                                <option value="">Select Location</option>
                                <option value="new-york">New York</option>
                                <option value="los-angeles">Los Angeles</option>
                                <option value="chicago">Chicago</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 manrope-bold">Type</label>
                            <select className="w-full p-2 border rounded">
                                <option value="">Select Type</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 manrope-bold">Bedrooms</label>
                            <select className="w-full p-2 border rounded">
                                <option value="">Select Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 manrope-bold">Baths</label>
                            <select className="w-full p-2 border rounded">
                                <option value="">Select Baths</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 manrope-bold">Sort By</label>
                            <select className="w-full p-2 border rounded">
                                <option value="">Select Sort</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest Listings</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 manrope-bold">Min Price</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Enter min price" />
                        </div>
                        <div>
                            <label className="block mb-1 manrope-bold">Max Price</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Enter max price" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-12 manrope-bold py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-600">
                            Search Now
                        </button>
                    </div>
                </form>
                </div>
            </div>
            

        </section>
        </>
    )
}

export default SearchSection