import { useState } from "react";
import "../../styles/product.css";

export default function ProductGallery({ images = [], video }) {
  const [active, setActive] = useState(video ? "video" : images[0]);

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      {/* Thumbnails */}
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "10px",
          minWidth: "64px" 
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`product-thumb-${i}`}
            onClick={() => setActive(img)}
            style={{
              width: 64,
              height: 64,
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
              border: active === img 
                ? "2px solid #3bb3b3" 
                : "2px solid transparent",
              outline: active === img ? "none" : "1px solid #eee",
              opacity: active === img ? 1 : 0.8
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = active === img ? "1" : "0.8")}
          />
        ))}

        {video && (
          <div
            onClick={() => setActive("video")}
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "18px",
              backgroundColor: "#f9f9f9",
              transition: "all 0.2s ease",
              border: active === "video" 
                ? "2px solid #3bb3b3" 
                : "2px solid transparent",
              outline: active === "video" ? "none" : "1px solid #eee",
              color: active === "video" ? "#3bb3b3" : "#555"
            }}
          >
            ▶
          </div>
        )}
      </div>

      {/* Main Preview */}
      <div style={{ 
        flex: 1, 
        backgroundColor: "#fff", 
        borderRadius: "8px", 
        overflow: "hidden",
        border: "1px solid #f0f0f0"
      }}>
        {active === "video" ? (
          <video 
            controls 
            autoPlay 
            muted 
            style={{ width: "100%", display: "block", aspectRatio: "1/1", objectFit: "cover" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={active}
            alt="product-large"
            className="product-image"
            style={{ 
              width: "100%", 
              aspectRatio: "1/1", 
              objectFit: "contain", 
              display: "block" 
            }}
          />
        )}
      </div>
    </div>
  );
}