import facebook from '/facebook.png'
import instagram from '/instagram.png'
import linkedin from '/linkedin.png'
import yelp from '/yelp.png'
import { useState, useEffect } from 'react';

function Socials() {
    const socialLinks = [
        { icon: facebook, url: 'https://www.facebook.com' },
        { icon: instagram, url: 'https://www.instagram.com' },
        { icon: linkedin, url: 'https://www.linkedin.com' },
        { icon: yelp, url: 'https://www.yelp.com' }
    ];

    const [isVisible, setIsVisible] = useState(false);
    const [isHeroSection, setIsHeroSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                setIsHeroSection(rect.top <= 0 && rect.bottom >= 0);
            }
        };

        const handleMouseMove = (e) => {
            if (!isHeroSection && e.clientX <= 64) { // 64px = 4rem (left side trigger area)
                setIsVisible(true);
            } else if (!isHeroSection) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHeroSection]);

    const socialsStyle = {
        position: 'fixed',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: isHeroSection || isVisible ? 1 : 0,
        transition: 'opacity 300ms ease-in-out',
        zIndex: 50
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(4px)',
        borderRadius: '0 0.5rem 0.5rem 0',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    };

    const iconStyle = {
        width: '2rem',
        height: '2rem',
        objectFit: 'contain',
        transition: 'transform 200ms ease-in-out'
    };

    return (
        <section id="socials" style={socialsStyle}>
            <div style={containerStyle}>
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img
                            src={social.icon}
                            alt={`Social icon ${index + 1}`}
                            style={iconStyle}
                        />
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Socials