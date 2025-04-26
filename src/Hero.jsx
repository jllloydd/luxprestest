import heroimg from './assets/heroimg.jpg'
function Hero() {
  return (
    <>
      <section id="hero" className="flex">
        <div className="flex flex-col justify-start py-48 px-24 space-y-6">
          <p className="text-2xl manrope-semibold">
              Marci Metzger - The Ridge Reality Group
          </p>
          <h1 className="text-5xl dm-reg">
              PAHRUMP REALTOR
          </h1>
          <button className="px-3 py-2 rounded-lg bg-black hover:bg-gray-500 text-white w-fit manrope-bold">
              Call Now
          </button>
        </div>
        <img 
          src={heroimg} 
          alt="" 
          className="w-1/2 object-cover ml-auto"
          style={{
            clipPath: 'url(#curvedClip)'
          }}
        />
        <svg width="0" height="0">
          <defs>
            <clipPath id="curvedClip" clipPathUnits="objectBoundingBox">
              <path d="M 0.6,0 C 0.3,0.3, 0,0.3, 0,0.9 V 1 H 1 V 0 Z" />
            </clipPath>
          </defs>
        </svg>
      </section>
    </>
  );
}

export default Hero;
