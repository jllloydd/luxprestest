import marci from '/marci.png'
function RealtorSection(){
return (
    <>
    <section id="realtor" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path d="M0 100Q300 50 600 150T1200 100L1440 0V800H0Z" fill="none" stroke="rgba(150,150,150,5)" strokeWidth="2" />
            <path d="M0 400Q400 200 800 500T1440 300V800H0Z" fill="none" stroke="rgba(150,150,150,0.5)" strokeWidth="2" />
            <path d="M0 600Q500 400 1000 700T1440 500V800H0Z" fill="none" stroke="rgba(150,150,150,0.5)" strokeWidth="2" />
        </svg>
        
        <div className="grid grid-cols-2 items-center relative z-10">
            <img src={marci} alt="" className="py-12 w-[500px] h-[600px] rounded-r-[200px]" />
            <div className="space-y-9 px-24">
            <p className="text-6xl dm-bold text-white text-start">
                Marci Metzger
            </p>
            <p className="text-3xl manrope-semibold text-white text-start">
                Realtor for nearly 3 decades!
            </p>
            <p className="text-2xl manrope-bold text-white text-start">
                206-919-6886
            </p>
            </div>
            
        </div>
    </section>
    </>
)
}

export default RealtorSection