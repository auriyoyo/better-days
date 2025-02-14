import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollArrow from "../components/scroll-arrow.jsx";

const Home = () => {
  const [headerText, setHeaderText] = useState("better days");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderText((prev) => (prev === "better days" ? "你得高兴啊" : "better days"));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        {/* HEADER ANIMATION */}
        <div
          style={{
            position: "relative",
            height: "45px", 
            overflow: "hidden",
            minWidth: "150px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={headerText}
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 5, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                whiteSpace: "nowrap",
                margin: 0, 
                lineHeight: "3"
              }}
            >
              {headerText}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* DATE */}
        <p
          style={{
            color: "#a0978b",
            marginTop: "-2px", 
            fontSize: "14px",
            lineHeight: "1", 
          }}
        >
          feb. 5, 2025
        </p>
      </div>

      <ScrollArrow />
    </>
  );
};

export default Home;
