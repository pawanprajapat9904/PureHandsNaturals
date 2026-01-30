import { useEffect, useState, useCallback } from "react";
import banners from "../../data/banners";
import { DEFAULT_BANNER_INTERVAL } from "../../utils/constants";
import "../../styles/banner.css";

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, DEFAULT_BANNER_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  if (!banners?.length) return null;

  return (
    <section 
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {banners.map((banner, index) => (
        <div 
          key={index} 
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={banner.image} alt={banner.title} />
          
          <div className="slide-overlay">
            <div className="slide-content">
              <span className="badge">New Arrival</span>
              <h1>{banner.title}</h1>
              <p>{banner.subtitle}</p>
              <div className="slide-actions">
                <a href="/products" className="banner-btn">Shop Now</a>
                <a href="/products" className="banner-btn-secondary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button className="nav-btn prev" onClick={prevSlide}>❮</button>
      <button className="nav-btn next" onClick={nextSlide}>❯</button>

      {/* Modern Indicators */}
      <div className="slider-dots">
        {banners.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}