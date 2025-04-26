import { useEffect, useState } from 'react';
import whatsapp from '/whatsapp.png'

function Contact(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
        <section id="contact" className="bg-slate-900 relative">
            <div className="px-12 py-12 grid grid-cols-2 gap-12">
                <form action="" className="space-y-12 px-12 py-12 bg-white rounded-lg manrope">
                <h1 className="dm-bold text-3xl">Send a Message!</h1>
                    <div>
                        <label htmlFor="name"  className="block text-black mb-2 manrope-bold">Name</label>
                        <input type="text" id="name" name="name" className="w-full border border-slate-900 p-2 rounded" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black mb-2 manrope-bold">Email</label>
                        <input type="email" id="email" name="email" className="w-full border border-slate-900 p-2 rounded" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-black mb-2 manrope-bold">Message</label>
                        <textarea id="message" name="message" className="w-full p-2 border border-slate-900 rounded" rows="4" required></textarea>
                    </div>
                    <div className="flex justify-center">
                    <button type="submit" className="bg-slate-900 manrope-bold text-white px-4 py-2 rounded hover:bg-slate-600">Send</button>
                    </div>
                </form>

                <div className="h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6d1e5a0b3e1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1643017817031!5m2!1sen!2sushttps://www.google.com/maps/place/3190+NV-160+Suite+F,+Pahrump,+NV+89048,+USA/data=!4m2!3m1!1s0x80c6398c31855555:0xca2c250302350734?sa=X&ved=1t:242&ictx=111"
                        width="100%"
                        height="100%"
                        style={{border:0}}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
            {isVisible && (
                <a 
                    href="https://wa.me/yourphonenumber"
                    className="fixed bottom-8 right-8 bg-white text-black manrope-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-500 flex items-center space-x-2"
                >
                    <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                    <span>Message us on Whatsapp!</span>
                </a>
            )}
        </section>
        </>
    )
}

export default Contact