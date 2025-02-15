/* header.jsx */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DateComponent from "./Date";

const Header = () => {
  const [headerText, setHeaderText] = useState("better days");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderText((prev) => (prev === "better days" ? "你得高兴啊" : "better days"));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
          position: "absolute", 
          top: "20px",  
          left: "20px",
          userSelect: "none",
          webkitUserSelect: "none",
          mozUserSelect: "none",
        }}
        >
        <a 
          href="https://github.com/auriyoyo/better-days" 
          target="_blank" 
          style={{ textDecoration: "none", color: "inherit", display: "inline-block" }}  
        >
        <div
          style={{
            position: "relative",
            height: "45px",
            overflow: "hidden",
            minWidth: "150px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
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
              lineHeight: "3",
            }}
          >
            {headerText}
          </motion.h1>
        </AnimatePresence>
      </div>
    </a>

      <DateComponent />
    </div>

  );
};

export default Header;

