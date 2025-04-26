import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import RealtorSection from './RealtorSection.jsx'
import CTASection from './CTASection.jsx'
import SearchSection from './SearchSection.jsx'
import Carousel from './Carousel.jsx'
import Gallery from './Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero/>
    <RealtorSection/>
    <CTASection/>
    <SearchSection/>
    <Carousel/>
    <Gallery/>
  </StrictMode>,
)
