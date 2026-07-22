// // import React, { useState, useEffect } from "react";

// // function DigitalClock() {
// //   // 1. Initialize state with the current local time string
// //   const [time, setTime] = useState(new Date().toLocaleTimeString());

// //   useEffect(() => {
// //     // 2. Set up an interval to update state every 1000 milliseconds (1 second)
// //     const timerId = setInterval(() => {
// //       setTime(new Date().toLocaleTimeString());
// //     }, 1000);

// //     // 3. Clean up the interval when the component unmounts to prevent memory leaks
// //     return () => clearInterval(timerId);
// //   }, []); // Empty dependency array ensures this runs only once on mount

// //   return (
// //     <div style={styles.clockContainer}>
// //       <h2>Local Time</h2>
// //       <div style={styles.timeDisplay}>{time}</div>
// //     </div>
// //   );
// // }

// // // Simple inline styles for presentation
// // const styles = {
// //   clockContainer: {
// //     fontFamily: "monospace",
// //     textAlign: "center",
// //     padding: "20px",
// //     borderRadius: "8px",
// //     background: "#282c34",
// //     color: "white",
// //     width: "fit-content",
// //     margin: "20px auto",
// //   },
// //   timeDisplay: {
// //     fontSize: "3rem",
// //     fontWeight: "bold",
// //     letterSpacing: "2px",
// //   },
// // };

// // export default DigitalClock;




// import React, { useState, useEffect } from "react";

// export default function App() {
//   // 1. Initialize state with the current local time string
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     // 2. Start a timer that runs every 1000 milliseconds (1 second)
//     const timerId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     // 3. Clean up the timer when the component is destroyed
//     return () => clearInterval(timerId);
//   }, []); // Empty array ensures this setup only happens once

//   // 4. Render the UI
//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Digital Clock</h2>
//         <div style={styles.timeString}>{time}</div>
//       </div>
//     </div>
//   );
// }

// // Minimal modern styling
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#0f172a",
//     fontFamily: "system-ui, sans-serif",
//   },
//   card: {
//     backgroundColor: "#1e293b",
//     padding: "2.5rem",
//     borderRadius: "1rem",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
//     textAlign: "center",
//     border: "1px solid #334155",
//   },
//   title: {
//     color: "#94a3b8",
//     fontSize: "1rem",
//     textTransform: "uppercase",
//     letterSpacing: "0.1em",
//     margin: "0 0 0.5rem 0",
//   },
//   timeString: {
//     color: "#38bdf8",
//     fontSize: "3.5rem",
//     fontWeight: "700",
//     fontFamily: "monospace",
//   },
// };





import React, { useState, useEffect } from "react";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time object every second
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Calculate rotation angles for each hand (360 degrees total)
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6; 
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div style={styles.container}>
      <div style={styles.clockCircle}>
        {/* Center Pivot Point */}
        <div style={styles.centerDot} />

        {/* Hour Hand */}
        <div 
          style={{
            ...styles.hand,
            ...styles.hourHand,
            transform: `rotate(${hourDegrees}deg)`
          }} 
        />

        {/* Minute Hand */}
        <div 
          style={{
            ...styles.hand,
            ...styles.minuteHand,
            transform: `rotate(${minuteDegrees}deg)`
          }} 
        />

        {/* Second Hand */}
        <div 
          style={{
            ...styles.hand,
            ...styles.secondHand,
            transform: `rotate(${secondDegrees}deg)`
          }} 
        />
      </div>
    </div>
  );
}

// Styling to construct the clock face and hands
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1e1e24",
  },
  clockCircle: {
    position: "relative",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    border: "8px solid #ffffff",
    backgroundColor: "#2a2a35",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  },
  centerDot: {
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#ff4757",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  },
  hand: {
    position: "absolute",
    bottom: "50%", // Anchor bottom of hand to center of clock
    left: "50%",
    transformOrigin: "bottom center", // Rotate from the bottom center point
    borderRadius: "4px",
  },
  hourHand: {
    width: "6px",
    height: "60px",
    backgroundColor: "#ffffff",
    marginLeft: "-3px", // Center horizontally over line
  },
  minuteHand: {
    width: "4px",
    height: "85px",
    backgroundColor: "#a0a0a0",
    marginLeft: "-2px",
  },
  secondHand: {
    width: "2px",
    height: "95px",
    backgroundColor: "#ff4757",
    marginLeft: "-1px",
  },
};
