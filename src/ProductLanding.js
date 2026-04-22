import React, { useEffect, useState } from "react";
import label from "./ULTRA-PURIFIED.png"
import label1000ml from "./a17-1000ml.png"


const BottleShowcase = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 300);
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                background: "#1f2a2e",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                perspective: "1000px",
                overflow: "hidden",
            }}
        >
            {/* BOTTLE */}
            <div
                style={{
                    position: "relative",
                    width: "180px",
                    height: "420px",
                    transform: show
                        ? "rotateY(0deg) translateY(0)"
                        : "rotateY(40deg) translateY(200px)",
                    transition: "all 1.5s ease",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* CAP */}
                <div
                    style={{
                        position: "absolute",
                        top: "-25px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "70px",
                        height: "30px",
                        background: "#111",
                        borderRadius: "6px",
                        boxShadow: "0 5px 10px rgba(0,0,0,0.5)",
                    }}
                />

                {/* BOTTLE BODY */}
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "80px 80px 40px 40px",
                        background:
                            "linear-gradient(to right, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
                        border: "1px solid rgba(255,255,255,0.2)",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                    }}
                >
                    {/* WATER */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: "65%",
                            background:
                                "linear-gradient(to top, #4fc3f7, #81d4fa)",
                            animation: "waterMove 3s ease-in-out infinite",
                        }}
                    />

                    {/* WATER SHINE */}
                    <div
                        style={{
                            position: "absolute",
                            width: "30%",
                            height: "100%",
                            left: "10%",
                            background:
                                "linear-gradient(to right, rgba(255,255,255,0.5), transparent)",
                        }}
                    />

                    {/* LABEL */}
                    {/* <div
                        style={{
                            position: "absolute",
                            top: "120px",
                            width: "100%",
                            height: "120px",
                            background: "#1f2a2e",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            color: "white",
                        }}
                    >
                        <div style={{ color: "#6ec1e4", fontSize: "12px" }}>
                            ULTRA-PURIFIED
                        </div>

                        <div
                            style={{
                                fontSize: "28px",
                                fontWeight: "900",
                                background:
                                    "linear-gradient(#fff,#aaa,#fff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            A17
                        </div>
                    </div> */}

                    {/* LABEL (REAL IMAGE) */}
                    <style>
                        {`
@keyframes labelEntry {
  0% {
    transform: translateX(-50%) scale(0.6) rotateY(30deg);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) scale(1) rotateY(0deg);
    opacity: 1;
  }
}
`}
                    </style>
                    <div
                        style={{
                            position: "absolute",
                            top: "52%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "90%",              // match bottle inner width
                            height: "82%",             // 🔥 FULL HEIGHT FIX
                            borderRadius: "35px",      // match bottle curve
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={label}
                            alt="A17 Label"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                </div>


                {/* REFLECTION */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        width: "100%",
                        height: "80px",
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
                        transform: "scaleY(-1)",
                        opacity: 0.3,
                        filter: "blur(4px)",
                    }}
                />
            </div>

            {/* RIPPLE EFFECT */}
            <div
                style={{
                    position: "absolute",
                    bottom: "80px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.2)",
                    animation: "ripple 2s infinite",
                }}
            />

            {/* ANIMATIONS */}
            <style>
                {`
        @keyframes waterMove {
          0% { height: 60%; }
          50% { height: 65%; }
          100% { height: 60%; }
        }

        @keyframes ripple {
          0% { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}
            </style>


             {/* <img
                            src={label1000ml}
                            alt="A17 Label"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        /> */}
        </div>
    );
};

export default BottleShowcase;