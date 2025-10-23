import React from "react";
import fourGif from "./assets/four.gif";
import balloonGif from "./assets/balloon.gif";
import balloongif2 from "./assets/balloon2.gif";

const GiftPage = () => {
  // Balloon colors and styles
  const balloons = [
    { id: 1, src: balloongif2, left: "0.5%", delay: "8.2s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Odd
    { id: 2, src: balloonGif, left: "2.5%", delay: "0.2s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Even
    { id: 3, src: balloonGif, left: "10%", delay: "6.6s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Odd
    { id: 4, src: balloongif2, left: "20%", delay: "0.4s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Even
    { id: 5, src: balloongif2, left: "30%", delay: "7.0s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Odd
    { id: 6, src: balloonGif, left: "40%", delay: "0.6s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Even
    { id: 7, src: balloonGif, left: "50%", delay: "6.8s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Odd
    { id: 8, src: balloongif2, left: "60%", delay: "0.3s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Even
    { id: 9, src: balloongif2, left: "70%", delay: "8.2s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Odd
    { id: 10, src: balloonGif, left: "80%", delay: "1.5s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Even
    { id: 11, src: balloonGif, left: "90%", delay: "6.4s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Odd
    { id: 12, src: balloongif2, left: "98%", delay: "7.7s", size: "clamp(65px, 9vw, 85px)", zIndex: 999 }, // Even
  ];

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)",
    color: "#8b4513",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    textAlign: "center",
    padding: "30px 15px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
  };

  const envelopeStyle = {
    background: "linear-gradient(145deg, #fff5f5, #ffe8e8)",
    padding: "clamp(40px, 6vw, 60px) clamp(30px, 5vw, 50px)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "min(90vw, 650px)",
    width: "100%",
    border: "2px solid #ffb6c1",
    position: "relative",
    margin: "20px 0",
    boxSizing: "border-box",
    zIndex: 10,
  };

  const heartStyle = {
    position: "absolute",
    top: "clamp(-15px, -3vw, -20px)",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    background: "#ffafbd",
    borderRadius: "50%",
    width: "clamp(40px, 8vw, 50px)",
    height: "clamp(40px, 8vw, 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    zIndex: 15,
  };

  const letterContentStyle = {
    lineHeight: "1.8",
    fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
    marginBottom: "10px",
    textAlign: "left",
    wordWrap: "break-word",
    position: "relative",
    zIndex: 12,
  };

  const paragraphStyle = {
    marginBottom: "clamp(18px, 4vw, 25px)",
    textAlign: "justify",
    fontSize: "inherit",
    position: "relative",
    zIndex: 12,
  };

// --- Style for the GIF ---
const singleGifStyle = {
  width: "clamp(120px, 25vw, 180px)",
  height: "auto",
  borderRadius: "12px",
  // boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  zIndex: 2,
  position: "relative",
  top: "-45px", // 👈 moves the GIF slightly upward
  transition: "transform 0.3s ease, top 0.3s ease",
};

// --- Style for the signature text ---
const signatureStyle = {
  fontSize: "1.2rem",
  fontStyle: "italic",
  color: "#d63384",
  textAlign: "right",
  lineHeight: "1.4",
  zIndex: 1,
};

// --- Container for side-by-side alignment ---
const signatureContainer = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "25%",
  position: "relative",
  marginTop: "20px",
};

  const backButtonStyle = {
    padding: "clamp(14px, 3vw, 16px) clamp(24px, 5vw, 32px)",
    fontSize: "clamp(1.1rem, 2.8vw, 1.2rem)",
    backgroundColor: "#ff6b95",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    marginTop: "clamp(25px, 5vw, 35px)",
    marginBottom: "10px",
    boxShadow: "0 4px 15px rgba(255,107,149,0.3)",
    minWidth: "180px",
    position: "relative",
    zIndex: 20,
  };

  const titleStyle = {
    color: "#d63384",
    marginBottom: "clamp(25px, 5vw, 35px)",
    fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    lineHeight: "1.3",
    position: "relative",
    zIndex: 12,
  };

  const balloonStyle = (balloon) => ({
  position: "fixed",
  left: balloon.left,
  bottom: "-80px", // start slightly below viewport
  width: balloon.size,
  height: "auto",
  animation: `floatUp 18s ease-in-out ${balloon.delay} infinite`,
  zIndex: balloon.zIndex,
  filter: "drop-shadow(3px 4px 8px rgba(0,0,0,0.25))",
  userSelect: "none",
  pointerEvents: "none",
  willChange: "transform, opacity",
  opacity: 0.9,
  });

  const floatingAnimation = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes heartBeat {
      0% { transform: translateX(-50%) scale(1); }
      50% { transform: translateX(-50%) scale(1.15); }
      100% { transform: translateX(-50%) scale(1); }
    }

    @keyframes floatUp {
      0% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 0;
      }
      5% {
        opacity: 0.8;
      }
      10% {
        transform: translateY(-10vh) rotate(5deg) scale(1.05);
        opacity: 1;
      }
      20% {
        transform: translateY(-20vh) rotate(-3deg) scale(1);
      }
      30% {
        transform: translateY(-30vh) rotate(4deg) scale(1.02);
      }
      40% {
        transform: translateY(-40vh) rotate(-2deg) scale(1);
      }
      50% {
        transform: translateY(-50vh) rotate(3deg) scale(1.03);
        opacity: 0.9;
      }
      60% {
        transform: translateY(-60vh) rotate(-4deg) scale(1);
      }
      70% {
        transform: translateY(-70vh) rotate(2deg) scale(1.01);
        opacity: 0.8;
      }
      80% {
        transform: translateY(-80vh) rotate(-5deg) scale(1);
        opacity: 0.6;
      }
      90% {
        transform: translateY(-90vh) rotate(3deg) scale(0.98);
        opacity: 0.4;
      }
      100% {
        transform: translateY(-100vh) rotate(0deg) scale(0.95);
        opacity: 0;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      overflow-x: hidden;
    }

    @media (min-width: 1200px) {
      .envelope {
        max-width: 700px;
      }
    }

    .envelope {
      background: rgba(255, 245, 245, 0.95);
    }
  `;

  const name = {
    color: "#d63346",
    marginBottom: "clamp(25px, 5vw, 35px)",
    fontSize: "clamp(1.4rem, 5.5vw, 2.3rem)",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    lineHeight: "1.3",
    position: "relative",
    zIndex: 12,
  };

  // Replace this with your actual GIF import
  const loveGif = fourGif; // Kiss GIF

  return (
    <div style={containerStyle}>
      <style>{floatingAnimation}</style>
      
      {/* 🎈 Floating Balloons in the Background */}
      {balloons.map((balloon) => (
        <img
          key={balloon.id}
          src={balloon.src}
          alt="balloon"
          style={balloonStyle(balloon)}
        />
      ))}
      
      <div style={envelopeStyle} className="envelope">
        <div style={{...heartStyle, animation: "heartBeat 2s ease-in-out infinite"}}>💖</div>
        
        <h1 style={titleStyle}>
          Happy Birthday to My One and Only, <b style={name}>Shrushti</b>
        </h1>
        
        <div style={letterContentStyle}>
          <p style={paragraphStyle}>My Dearest, <b style={name}>Shrushti</b></p>
          
          <p style={paragraphStyle}>
            Even though miles separate us today, my heart feels closer to you than ever. 
            Distance might keep us apart physically, but it can never stop the love I have for you, 
            the warmth I feel when I think of you, and the happiness your presence brings 
            into my life — even from far away.
          </p>
          
          <p style={paragraphStyle}>
            Shrushti, you are truly one of a kind. 
            You’ve filled my life with so much light, love, and meaning. 
            Every message, every call, every laugh we’ve shared has built a connection that not even distance can break. 
            I miss you every single day, but at the same time, I feel so lucky to have someone as beautiful and pure-hearted as you in my life.
          </p>
          
          <p style={paragraphStyle}>
            On your special day, I just want you to know that you are my favorite person in this whole world. 
            You deserve nothing less than endless happiness, genuine love, and countless smiles — today and always. 
            I wish I could be there with you, holding your hand, looking into your eyes, 
            and celebrating this day side by side… but until that day comes, 
            I’m sending you all my love wrapped in a thousand hugs and a million kisses. 💌
          </p>
          
          <p style={paragraphStyle}>
            May this birthday bring you closer to your dreams, 
            may your heart always stay as kind and beautiful as it is, 
            and may every moment today remind you how loved you are — not just by everyone around you, 
            but especially by me.
          </p>

          <p style={paragraphStyle}>
            You’re not just my girlfriend, Shrushti — you’re my peace, my motivation, 
            and my reason to keep going when life gets hard. 
            Thank you for staying by my side even through the distance, for trusting me, 
            for loving me the way you do. You make every moment worth it.
          </p>

          <p style={paragraphStyle}>
            So, on this special day, I want to promise you once again — no matter how far we are, 
            no matter how long it takes, I’ll keep loving you more with every sunrise and miss you a little extra 
            with every sunset until the day I can finally call you mine in person. ❤
          </p>
          
          <p style={paragraphStyle}>
            Happy Birthday once again, my princess, my heartbeat, my forever — Shrushti 🎂💫
            I love you endlessly and can’t wait for the day I get to celebrate this day by your side. 💞
          </p>
        </div>
        
        <div style={signatureContainer}>
          <img src={fourGif} alt="Cute love animation" style={singleGifStyle} />
          <p style={signatureStyle}>
            With all my love,<br />
            Your Debraj 💝
          </p>
        </div>
      </div>
      
      <button 
        style={backButtonStyle}
        onClick={() => window.history.back()}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.backgroundColor = "#ff4d7d";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.backgroundColor = "#ff6b95";
        }}
      >
        💝 Back to Surprise
      </button>
    </div>
  );
};

export default GiftPage;