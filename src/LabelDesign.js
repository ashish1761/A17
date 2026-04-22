// import React, { useEffect, useState } from "react";
// import a17logo from "./logg.png"

// const LandingScreen = () => {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         setTimeout(() => setVisible(true), 300);
//     }, []);

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 width: "100%",
//                 background: "#1f2a2e",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "white",
//                 fontFamily: "Montserrat, sans-serif",
//                 overflow: "hidden",
//                 position: "relative",
//             }}
//         >
//             {/* Background Texture */}
//             <div
//                 style={{
//                     position: "absolute",
//                     width: "100%",
//                     height: "100%",
//                     backgroundImage:
//                         "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05), transparent 40%)",
//                     opacity: 0.4,
//                 }}
//             />

//             {/* Logo */}
//             <div
//                 style={{
//                     marginBottom: "20px",
//                     transform: visible ? "translateY(0px)" : "translateY(-40px)",
//                     opacity: visible ? 1 : 0,
//                     transition: "all 0.8s ease",
//                 }}
//             >
//                 <div
//                     style={{
//                         width: "60px",
//                         height: "60px",
//                         borderTop: "8px solid #d9d9d9",
//                         borderRight: "8px solid transparent",
//                         transform: "rotate(45deg)",
//                         position: "relative",
//                     }}
//                 >
//                     <div
//                         style={{
//                             position: "absolute",
//                             top: "20px",
//                             left: "10px",
//                             width: "30px",
//                             height: "8px",
//                             background: "#5bc0eb",
//                             transform: "rotate(-45deg)",
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* ULTRA PURIFIED */}
//             <h3
//                 style={{
//                     letterSpacing: "3px",
//                     color: "#5bc0eb",
//                     margin: 0,
//                     fontWeight: "500",
//                     opacity: visible ? 1 : 0,
//                     transition: "opacity 1s ease 0.5s",
//                 }}
//             >
//                 ULTRA-PURIFIED
//             </h3>

//             {/* A17 Title */}
//             <h1
//                 style={{
//                     fontSize: "80px",
//                     margin: "10px 0",
//                     fontWeight: "900",
//                     background:
//                         "linear-gradient(180deg, #ffffff 0%, #bfbfbf 50%, #7f7f7f 100%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     letterSpacing: "5px",
//                     opacity: visible ? 1 : 0,
//                     transform: visible ? "scale(1)" : "scale(0.8)",
//                     transition: "all 0.8s ease 0.6s",
//                 }}
//             >
//                 <img src={a17logo} alt="logo" style={{ height: 60 }} />
//             </h1>

//             {/* Premium Hydro Cell */}
//             <h2
//                 style={{
//                     color: "#5bc0eb",
//                     letterSpacing: "2px",
//                     margin: "5px 0",
//                     opacity: visible ? 1 : 0,
//                     transition: "opacity 1s ease 0.8s",
//                 }}
//             >
//                 PREMIUM HYDRO CELL
//             </h2>

//             {/* Subtitle */}
//             <p
//                 style={{
//                     color: "#cfd8dc",
//                     letterSpacing: "1px",
//                     fontSize: "14px",
//                     opacity: visible ? 1 : 0,
//                     transition: "opacity 1s ease 1s",
//                 }}
//             >
//                 MOLECULARLY FILTERED WATER
//             </p>

//             {/* Animated Wave Line */}
//             <div
//                 style={{
//                     width: "250px",
//                     height: "2px",
//                     background: "#5bc0eb",
//                     marginTop: "30px",
//                     position: "relative",
//                     overflow: "hidden",
//                 }}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         width: "50px",
//                         height: "2px",
//                         background: "#5bc0eb",
//                         animation: "wave 1.5s infinite linear",
//                     }}
//                 />
//             </div>

//             {/* Inline Keyframes */}
//             <style>
//                 {`
//           @keyframes wave {
//             0% { left: -50px; }
//             100% { left: 100%; }
//           }
//         `}
//             </style>

//             {/* Footer Text */}
//             <p
//                 style={{
//                     marginTop: "40px",
//                     fontSize: "12px",
//                     color: "#aaa",
//                     opacity: visible ? 1 : 0,
//                     transition: "opacity 1s ease 1.2s",
//                 }}
//             >
//                 Crush the bottle after use
//             </p>
//         </div>
//     );
// };

// export default LandingScreen;

import React, { useEffect, useState } from "react";
import a17logo from "./A17 ULTRA-PURIFIED.png"
const LabelDesign = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 200);
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                background: "#2c3437",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "'Montserrat', sans-serif",
                color: "white",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* TOPOGRAPHY BACKGROUND */}
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#2c3437",
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cartographer.png')",
                    backgroundRepeat: "repeat",
                    backgroundBlendMode: "multiply",   // 🔥 KEY LINE
                    //   filter: "brightness(40%) contrast(140%)",
                }}
            />

            {/* MAIN CONTAINER */}
            <div
                style={{
                    textAlign: "center",
                    zIndex: 2,
                    transform: show ? "translateY(0)" : "translateY(40px)",
                    opacity: show ? 1 : 0,
                    transition: "all 1s ease",
                }}
            >
                {/* LOGO */}
                <div style={{ marginBottom: "25px" }}>
                    <img
                        src={a17logo} // 👉 replace with your real logo
                        alt="logo"
                        style={{
                            width: "70px",
                            filter: "drop-shadow(0px 0px 5px rgba(255,255,255,0.2))",
                        }}
                    />
                </div>

                {/* ULTRA TEXT */}
                <div
                    style={{
                        color: "#6ec1e4",
                        letterSpacing: "4px",
                        fontSize: "18px",
                        marginBottom: "10px",
                    }}
                >
                    ULTRA-PURIFIED
                </div>

                {/* A17 METALLIC */}

                <div
                    style={{
                        fontSize: "90px",
                        fontWeight: "900",
                        letterSpacing: "6px",
                        position: "relative",
                        display: "inline-block",
                        background: `
      linear-gradient(
        to bottom,
        #f5f5f5 0%,
        #dcdcdc 20%,
        #bfbfbf 40%,
        #f0f0f0 50%,
        #9e9e9e 70%,
        #e6e6e6 85%,
        #cfcfcf 100%
      )
    `,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: `
      0px 1px 0px rgba(255,255,255,0.4),
      0px 3px 6px rgba(0,0,0,0.6)
    `,
                    }}
                >
                    A17

                    {/* TEXTURE OVERLAY */}
                    <span
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                                "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
                            opacity: 0.25,
                            mixBlendMode: "overlay",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            pointerEvents: "none",
                        }}
                    >
                        A17
                    </span>

                    {/* LIGHT SHINE */}
                    {/* <span
                        style={{
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                            animation: "shine 3s infinite",
                            pointerEvents: "none",
                        }}
                    /> */}
                </div>

                {/* PREMIUM TEXT */}
                <div
                    style={{
                        color: "#6ec1e4",
                        fontSize: "20px",
                        letterSpacing: "3px",
                        marginBottom: "10px",
                    }}
                >
                    PREMIUM HYDRO CELL
                </div>

                {/* SUBTEXT */}
                <div
                    style={{
                        color: "#cfd8dc",
                        fontSize: "14px",
                        letterSpacing: "2px",
                        marginBottom: "30px",
                    }}
                >
                    MOLECULARLY FILTERED WATER
                </div>

                {/* ECG LINE */}

                <style>
                    {`
                @keyframes drawLine {
                to {
                    stroke-dashoffset: 0;
                }
                }
                `}
                </style>
                <div
                    style={{
                        width: "320px",
                        height: "60px",
                        margin: "auto",
                    }}
                >
                    <svg
                        viewBox="0 0 300 60"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <path
                            d="
        M0 30 
        L100 30 
        L115 10 
        L130 50 
        L145 30 
        L300 30
      "
                            stroke="#6ec1e4"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                strokeDasharray: "400",
                                strokeDashoffset: "400",
                                animation: "drawLine 2s ease forwards",
                            }}
                        />
                    </svg>
                </div>
                {/* FOOTER TEXT */}
                {/* <div
                    style={{
                        marginTop: "30px",
                        fontSize: "14px",
                        color: "#e0e0e0",
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        paddingTop: "10px",
                        width: "300px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Crush the bottle after use
                </div> */}
            </div>
        </div>
    );
};

export default LabelDesign;