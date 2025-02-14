import React from "react";
import ScrollArrow from "../components/scroll-arrow.jsx";

const Home = () => {
  return (
    <>
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <h1>better days</h1>
        <p style={{ color: "#a0978b" }}>feb. 5, 2025</p>
      </div>
      <ScrollArrow />
    </>
  );
};

export default Home;
