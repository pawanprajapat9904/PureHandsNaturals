import { useEffect, useState } from "react";
import banners from "../../data/banners";
import { DEFAULT_BANNER_INTERVAL } from "../../utils/constants";
import "../../styles/banner.css";

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, DEFAULT_BANNER_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className="hero-banner">
      <img src={banner.image} alt={banner.title} />

      <div className="banner-content">
        <h1>{banner.title}</h1>
        <p>{banner.subtitle}</p>
      </div>
    </div>
  );
}
