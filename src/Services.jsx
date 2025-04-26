import services1 from './assets/services1.jpg'
import services2 from './assets/services2.jpg'
import services3 from './assets/services3.jpg'

function Services(){
    return(
        <>
        <section id="services" className="py-12 space-y-6">
            <h1 className="text-3xl dm-bold text-center">Our Services</h1>
            <div className="grid grid-cols-3 gap-8 px-48">
                <div className="flex flex-col space-y-5">
                    <img src={services3} className=" rounded-lg shadow-lg" alt="" />
                    <p className="text-lg manrope-bold text-center">Real Estate Done Right</p>
                    <p className="manrope text-center px-6 text-sm">Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
                </div>
                <div className="flex flex-col space-y-5">
                    <img src={services1} className=" rounded-lg shadow-lg" alt="" />
                    <p className="text-lg manrope-bold text-center">Commercial & Residential</p>
                    <p className="manrope text-center px-6 text-sm">Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
                </div>
                <div className="flex flex-col space-y-5">
                    <img src={services2} className=" rounded-lg shadow-lg" alt="" />
                    <p className="text-lg manrope-bold text-center">Rely On Expertise</p>
                    <p className="manrope text-center px-6 text-sm">If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services