import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hiGif from "./assets/hi.gif";
import giftbox from "./assets/giftbox.png";

const SlidingGifReveal = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // Enhanced container with gradient background and subtle animation
  const containerStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    overflow: "hidden",
    position: "relative",
  };

  // Floating particles background
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    right: Math.random() * 100,
    bottom: Math.random() * 100,
    animationDelay: Math.random() * 3,
  }));

  // Main box with enhanced styling
  const boxStyle = {
    position: "relative",
    width: "min(90vw, 400px)",
    height: "min(90vw, 400px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  };

  // Button without hover effects
  const buttonStyle = {
    position: "absolute",
    zIndex: 1,
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    opacity: clicked ? 1 : 0,
    transform: clicked ? "translateX(20px)" : "translateX(0)",
    transition: "transform 400ms ease, opacity 400ms ease",
    filter: clicked ? "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))" : "none",
  };

  // Gift image without hover effects
  const buttonImgStyle = {
    width: "50%",
    maxWidth: "140px",
    height: "auto",
    borderRadius: "50%",
    objectFit: "contain",
    animation: clicked ? 
      "bounce 0.6s ease, subtlePulse 2s ease-in-out infinite 0.6s" : 
      "none",
  };

  // Clean GIF style with no decorations and no hover effects
  const imgStyle = {
    zIndex: 2,
    width: "50%",
    maxWidth: "270px",
    height: "auto",
    objectFit: "contain",
    borderRadius: 0,
    cursor: "pointer",
    transform: clicked ? "translateX(200px)" : "translateX(0)",
    transition: "transform 700ms cubic-bezier(.2,.9,.2,1)",
    // All decorative properties removed
    filter: "none",
    border: "none",
    background: "none",
    boxShadow: "none",
    outline: "none",
  };

  // Enhanced CSS animations
  const enhancedKeyframes = `
    @keyframes bounce {
      0% { transform: scale(1); }
      30% { transform: scale(1.15); }
      50% { transform: scale(0.95); }
      70% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes subtlePulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.1); }
    }
  `;

  // Particle style
  const particleStyle = (particle) => ({
    position: "absolute",
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    left: `${particle.left}%`,
    top: `${particle.top}%`,
    right: `${particle.right}%`,
    bottom: `${particle.bottom}%`,
    background: "rgb(255, 240, 36)",
    borderRadius: "50%",
    animation: `twinkle 3s ease-in-out ${particle.animationDelay}s infinite`,
    pointerEvents: "none",
  });

  const handleGiftClick = () => {
    navigate("/gift");
  };

  return (
    <div style={containerStyle}>
      <style>{enhancedKeyframes}</style>
      
      {/* Floating particles background */}
      {particles.map(particle => (
        <div key={particle.id} style={particleStyle(particle)} />
      ))}
      
      <div style={boxStyle}>
        {/* Button (hidden behind GIF until click) */}
        <button
          style={buttonStyle}
          onClick={handleGiftClick}
        >
          <img src={giftbox} alt="Gift Box" style={buttonImgStyle} />
        </button>

        {/* GIF that slides away on click - no decorations and no hover effects */}
        <img
          src={hiGif}
          alt="Sliding GIF"
          style={imgStyle}
          onClick={() => setClicked((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default SlidingGifReveal;