import pc from './assets/pc.png'
import realtor from './assets/realtor.jpg'
import ridge from './assets/ridge.png'
import eqh from './assets/eqh.png'

function Carousel(){
    return(
        <>
        <section id="carousel">
            <div className="carousel-container">
                <div className="carousel-track">
                    <img src={pc} alt="PC Logo" className="carousel-item" />
                    <img src={realtor} alt="Realtor Logo" className="carousel-item" />
                    <img src={ridge} alt="Ridge Logo" className="carousel-item" />
                    <img src={eqh} alt="EQH Logo" className="carousel-item" />

                    <img src={pc} alt="PC Logo" className="carousel-item" />
                    <img src={realtor} alt="Realtor Logo" className="carousel-item" />
                    <img src={ridge} alt="Ridge Logo" className="carousel-item" />
                    <img src={eqh} alt="EQH Logo" className="carousel-item" />
                </div>
            </div>
        </section>
        <style jsx>{`
            #carousel {
                overflow: hidden;
                padding: 40px 0;
            }
            .carousel-container {
                width: 100%;
                overflow: hidden;
            }
            .carousel-track {
                display: flex;
                width: max-content;
                animation: scroll 20s linear infinite;
            }
            .carousel-item {
                width: 200px;
                height: 100px;
                object-fit: contain;
                margin: 0 40px;
            }
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
        `}</style>
        </>
    )
}

export default Carousel