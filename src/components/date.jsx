/* date.jsx */
import React from "react";

const DateComponent = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const dateParts = formattedDate.split(" ");
    const monthWithDot = dateParts[0].replace(/([A-Za-z]+)/, "$1."); 
    const finalDate = `${monthWithDot} ${dateParts[1]} ${dateParts[2]}`;


    return (
        <p style={{ color: "#a0978b", fontSize: "14px", lineHeight: "1" }}>
            {finalDate.toLowerCase()} 
        </p>
    );
};

export default DateComponent;