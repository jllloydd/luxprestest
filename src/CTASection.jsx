import cta1 from "/cta1.png";
import cta2 from "/cta2.png";
import cta3 from "/cta3.png";

function CTASection() {
  return (
    <>
      <section id="cta">
        <h1 className="text-center py-12 text-4xl dm-reg text-shadow-lg/30">
          GET IT SOLD
        </h1>

        <div className="flex justify-center">
          <div className="max-w-7xl w-full px-48 py-12 space-y-6">
            <div className="grid grid-cols-2 gap-8 items-center">
              <img src={cta1} alt="" className="w-96 rounded-lg shadow-lg" />
              <div className="pr-12 space-y-4">
                <h1 className="text-2xl manrope-bold">
                  Top Residential Sales Last 5 Years
                </h1>
                <p className="manrope">
                  We helped nearly 90 clients in 2021, and closed 28.5 million
                  in sales! Our team works hard everyday to grow and learn, so
                  that we may continue to excel in our market. Our clients
                  deserve our best, & we want to make sure our best is better
                  every year.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="pr-12 space-y-4 text-end">
                <h1 className="text-2xl manrope-bold">Don't Just List it...</h1>
                <p className="manrope">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at the fingertips of every possible buyer, getting you top
                  dollar for your home.
                </p>
              </div>
              <img src={cta2} alt="" className="w-96 rounded-lg shadow-lg" />
            </div>
            <div className="grid grid-cols-2 gap-8 items-center">
              <img src={cta3} alt="" className="w-96 rounded-lg shadow-lg" />
              <div className="pr-12 space-y-4">
                <h1 className="text-2xl manrope-bold">Guide to Buyers</h1>
                <p className="manrope">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTASection;
