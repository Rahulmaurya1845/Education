import React, { useState, useEffect } from 'react'
import './HeroSlider.css'

import slide1 from '../../images/img1.jpg'
import slide2 from '../../images/img2.jpg'
import slide3 from '../../images/img3.jpg'
import slide4 from '../../images/img4.jpg'
import slide5 from '../../images/img5.jpg'
import slide6 from '../../images/img6.jpg'

const slides = [slide1, slide2, slide3, slide4, slide5, slide6]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
  }

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length)
  }

  return (
    <div className="hero-slider" aria-label="Hero Image Slider">
      <button className="arrow left" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>

      <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="hero-image"
      />

      <button className="arrow right" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>
    </div>
  )
}