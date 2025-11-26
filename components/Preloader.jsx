import React from "react";

export default function Preloader() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
      flexDirection: "column"
    }}>
      <div className="loader" style={{
        border: "8px solid #f3f3f3",
        borderTop: "8px solid #185a9d",
        borderRadius: "50%",
        width: 70,
        height: 70,
        animation: "spin 1s linear infinite"
      }}></div>
      <h3 style={{ marginTop: 20, color: "#fff" }}>Loading...</h3>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
