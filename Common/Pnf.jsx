import React from "react";
import { Link } from "react-router-dom";

function PNF() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
    backgroundColor: "#f8fafc",
  },
  code: {
    fontSize: "100px",
    margin: 0,
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  title: {
    fontSize: "26px",
    margin: "10px 0",
    fontWeight: "600",
    color: "#1e293b",
  },
  text: {
    fontSize: "16px",
    color: "#475569",
    maxWidth: "400px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 25px",
    backgroundColor: "#1e3a8a",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default PNF;
