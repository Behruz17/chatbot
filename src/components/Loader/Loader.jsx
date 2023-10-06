// import React, { useState, useEffect } from "react";
// import './Loader.css'

// function Loader() {
//   const [dots, setDots] = useState(".");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prevDots) => (prevDots.length === 3 ? "." : prevDots + "."));
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return <div className="bot-message loader">{dots}</div>;
// }

// export default Loader;

import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
<div className="bot-message loader">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  )
}
