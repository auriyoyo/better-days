/* cookie.jsx */

import React from "react";
import { motion } from "framer-motion";
import cookieImage from "../assets/main-cookie.svg";

const Cookie = () => {
    return (
    <motion.div 
        style={{
            position: "absolute",
            top: "50%",
            left: "47%",
            transform: "translate(-50%, -50%) scale(1)",
            width: "400px",
            height: "auto",
            cursor: "pointer",
            transformOrigin: "center",
        }}
        whileHover={{
            transform: "translate(-50%, -50%) scale(1.05)",
        }}
        whileTap={{
            transform: "translate(-50%, -50%) scale(0.95)",
        }}
    >
        <img src = {cookieImage} 
            alt = "fortune cookie" className="cookie"
            style={{
                width: "100%",
                height: "auto",
            }}
        />
        </motion.div>
    );
};

export default Cookie;
