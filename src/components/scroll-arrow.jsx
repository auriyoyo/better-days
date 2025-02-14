import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import arrowIcon from "../assets/arrow.svg";

const MotionBox = motion(Box);

const ScrollArrow = () => {
  return (
    <MotionBox
      position="absolute"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <img src={arrowIcon} alt="Scroll down" width="32" height="32" />
    </MotionBox>
  );
};

export default ScrollArrow;
