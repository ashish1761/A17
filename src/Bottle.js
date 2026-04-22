import React, { useEffect, useState } from "react";
import label1000ml from "./correct10000ml.png";
import label500ml from "./a17-500ml.png";
import label250ml from "./a17-250ml.png";

const Bottle = () => {
    const [active, setActive] = useState(1);

    // Auto switch products
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev === 3 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const bottles = [
        { img: label250ml, size: "250ml" },
        { img: label500ml, size: "500ml" },
        { img: label1000ml, size: "1000ml" },
    ];

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                background: "#1f2a2e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                color: "white",
                fontFamily: "Montserrat",
                paddingBottom:'5%'

            }}
        >
            {/* TITLE */}
            <h2
                style={{
                    color: "#6ec1e4",
                    letterSpacing: "3px",
                    marginBottom: "20px",
                }}
            >
                OUR PRODUCTS
            </h2>

            {/* BOTTLE DISPLAY */}
            <div
                style={{
                    display: "flex",
                    gap: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                    perspective: "1200px",
                    position: "relative",
                    width: "600px",
                    height: "500px",
                }}
            >
                {bottles.map((bottle, index) => {
                    const position = (index + 1 - active + 3) % 3;
                    // 0 = center, 1 = right, 2 = left

                    let transform = "";
                    let scale = 1;
                    let opacity = 1;
                    let zIndex = 1;

                    if (position === 0) {
                        // 🔥 ACTIVE (CENTER)
                        transform = "translateX(0px) rotateY(0deg)";
                        scale = 1.4;               // BIGGER 🔥
                        opacity = 1;
                        zIndex = 3;
                    } else if (position === 1) {
                        // RIGHT
                        transform = "translateX(180px) rotateY(-40deg)";
                        scale = 0.8;
                        opacity = 0.5;
                        zIndex = 2;
                    } else {
                        // LEFT
                        transform = "translateX(-180px) rotateY(40deg)";
                        scale = 0.8;
                        opacity = 0.5;
                        zIndex = 2;
                    }

                    return (
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                transition: "all 1s ease",
                                transform: `${transform} scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                        >
                            {/* IMAGE */}
                            <img
                                src={bottle.img}
                                alt={bottle.size}
                                style={{
                                    width: "220px",
                                    height: "450px",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0px 30px 40px rgba(0,0,0,0.7))",
                                }}
                            />

                            {/* REFLECTION */}
                            {/* <img
                                src={bottle.img}
                                alt="reflection"
                                style={{
                                    width: "220px",
                                    height: "450px",
                                    objectFit: "contain",
                                    transform: "scaleY(-1)",
                                    opacity: 0.25,
                                    filter: "blur(4px)",
                                    marginTop: "-20px",
                                }}
                            /> */}

                            {/* SIZE */}
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                    color: "#6ec1e4",
                                    letterSpacing: "2px",
                                    fontSize: position === 0 ? "20px" : "14px",
                                }}
                            >
                                {bottle.size}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* DOT INDICATORS */}
            <div style={{ marginTop: "40px", display: "flex", gap: "10px" }}>
                {[1, 2, 3].map((dot) => (
                    <div
                        key={dot}
                        onClick={() => setActive(dot)}
                        style={{
                            width: active === dot ? "14px" : "10px",
                            height: active === dot ? "14px" : "10px",
                            borderRadius: "50%",
                            background: active === dot ? "#6ec1e4" : "#555",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottle;