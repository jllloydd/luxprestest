import gal1 from './assets/gal1.jpg'
import gal2 from './assets/gal2.jpg'
import gal3 from './assets/gal3.jpg'
import gal4 from './assets/gal4.jpg'
import gal5 from './assets/gal5.jpg'
import gal6 from './assets/gal6.jpg'
import { useState } from 'react';
import './Gallery.css'; // New CSS file for animations

function Gallery() {
    const images = [gal1, gal2, gal3, gal4, gal5, gal6];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Calculate visible cards (current, previous, next)
    const visibleCards = [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length]
    ];

    return (
        <>
            <section id="gallery" className="bg-slate-900 px-12 py-12">
                <h1 className="text-3xl text-center dm-bold text-white mb-8">Photo Gallery</h1>
                <div className="max-w-6xl mx-auto relative">
                    <div className="gallery-container">
                        {visibleCards.map((img, index) => (
                            <div 
                                key={index}
                                className={`gallery-card ${index === 1 ? 'active' : ''}`}
                            >
                                <img 
                                    src={img} 
                                    alt={`Gallery image`}
                                    className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        ))}
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