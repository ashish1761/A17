import React from "react";
import FOOTERLOGO from "./A17 ULTRA-PURIFIED.png"
const Footer = () => {
    return (
        <div
            style={{
                // width: "100%",
                background: "#121a1d",
                color: "#ccc",
                padding: "50px 20px 20px",
                fontFamily: "Montserrat",
                position: "relative",
                overflow: "hidden",
                // paddingTop:"20%"
            }}
        >
            {/* WATER WAVE TOP LINE */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: "#6ec1e4",
                    boxShadow: "0 0 15px #6ec1e4",
                    // paddingTop:'5'
                }}
            />

            {/* MAIN CONTENT */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "40px",
                }}
            >
                {/* BRAND */}
                <div style={{ flex: "1 1 250px", textAlign: "center" }}>

                    {/* LOGO */}
                    <img
                        src={FOOTERLOGO}   // 👉 put your logo in public folder
                        alt="A17 Logo"
                        style={{
                            width: "60px",
                            marginBottom: "10px",
                            filter: "drop-shadow(0 0 10px rgba(110,193,228,0.4))",
                        }}
                    />

                    {/* HEADING */}
                    <h2
                        style={{
                            color: "#6ec1e4",
                            letterSpacing: "3px",
                            margin: 0,
                        }}
                    >
                        A17 Water
                    </h2>

                    {/* TAGLINE */}
                    <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                        Ultra-purified, molecularly filtered water designed for
                        strength, safety, and premium hydration.
                    </p>
                </div>

                {/* ADDRESS */}
                <div style={{ flex: "1 1 250px" }}>
                    <h3 style={{ color: "#fff" }}>Address</h3>
                    <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                        ASHIRWAD ASSOCIATES <br />
                        Kothrud Pune, Maharashtra, India<br />
                        PIN: 411038
                    </p>
                </div>

                {/* CONTACT */}
                <div style={{ flex: "1 1 250px" }}>
                    <h3 style={{ color: "#fff" }}>Contact</h3>
                    <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                        📞 +91 9657920009<br />
                        ✉ info@a17water.com<br />
                        🌐 www.a17water.com
                    </p>
                </div>

                {/* SOCIAL */}
                <div style={{ flex: "1 1 200px" }}>
                    <h3 style={{ color: "#fff" }}>Follow Us</h3>

                    <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                        {["F", "I", "L", "Y"].map((icon, i) => (
                            <div
                                key={i}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background: "#1f2a2e",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#6ec1e4",
                                    cursor: "pointer",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "#6ec1e4",
                                    e.currentTarget.style.color = "#000")
                                }
                                onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "#1f2a2e",
                                    e.currentTarget.style.color = "#6ec1e4")
                                }
                            >
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div
                style={{
                    marginTop: "40px",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "20px",
                    textAlign: "center",
                    fontSize: "14px",
                }}
            >
                © {new Date().getFullYear()} A17 Water | All Rights Reserved
            </div>

            {/* WATER GLOW EFFECT */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "300px",
                    height: "100px",
                    background: "#6ec1e4",
                    filter: "blur(120px)",
                    opacity: 0.2,
                }}
            />
        </div>
    );
};

export default Footer;