import gal1 from './assets/gal1.jpg'
import gal2 from './assets/gal2.jpg'
import gal3 from './assets/gal3.jpg'
import gal4 from './assets/gal4.jpg'
import gal5 from './assets/gal5.jpg'
import gal6 from './assets/gal6.jpg'
import { useState } from 'react';

function Gallery() {
    const images = [gal1, gal2, gal3, gal4, gal5, gal6];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <section id="gallery" className="bg-slate-900 px-12 py-12">
                <h1 className="text-3xl text-center dm-bold text-white mb-8">Photo Gallery</h1>
                <div className="max-w-4xl mx-auto relative">
                    <div className="overflow-hidden rounded-lg shadow-2xl">
                        <img 
                            src={images[currentIndex]} 
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="w-full h-[500px] object-cover transition-opacity duration-300"
                        />
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button 
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Gallery