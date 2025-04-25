function Hero() {
  return (
    <>
      <section id="hero">
        <div className="flex flex-col justify-start py-48 px-24 space-y-6">
        <p className="text-2xl font-semibold">
            Marci Metzger - The Ridge Reality Group
        </p>
        <h1 className="text-5xl font-extrabold">
            PAHRUMP REALTOR
        </h1>
        <button className="px-2 py-2 rounded-lg bg-black text-white w-fit">
            Call Now
        </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
