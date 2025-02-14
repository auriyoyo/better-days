import React, { useState } from "react";
import { motion } from "framer-motion";
import arrowIcon from "../assets/arrow.svg";

const ScrollArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ARROW ANIMATION */}
      <motion.div
        animate={isHovered ? { y: -15 } : { y: [0, -10, 0] }}
        transition={
          isHovered
            ? { duration: 0.3, ease: "easeOut" } 
            : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <img src={arrowIcon} alt="Scroll down" width="32" height="32" />
      </motion.div>

      {/* VIEW on hover */}
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={isHovered ? { opacity: 1, y: -20 } : { opacity: 0, y: 5 }} 
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ fontSize: "12px", color: "#a0978b", marginTop: "0px" }} 
      >
        VIEW
      </motion.p>
    </div>
  );
};

export default ScrollArrow;
