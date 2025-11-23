// Home.jsx
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer'
const Home = () => {
  return (
    <div style={styles.container}>

      {/* Header Section */}
      <section style={styles.headerSection}>
        <h1 style={styles.title}>Welcome to MediCare</h1>
        <p style={styles.subtitle}>
          Your trusted digital healthcare partner. Book appointments, access records, and receive instant updates.
        </p>
        <Link to={'/explore'}>
          <button style={styles.button}>Explore More</button>

        </Link>      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Our Features</h2>

        <div style={styles.featuresGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📅 Easy Appointment Booking</h3>
            <p>Schedule appointments with ease from any device.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📄 Digital Records</h3>
            <p>Access past visits, prescriptions & reports anytime.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📞 SMS Notifications</h3>
            <p>Receive instant alerts with doctor, time & token number.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>👨‍⚕️ Expert Doctors</h3>
            <p>Highly qualified specialists available at your service.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🚑 Emergency Support</h3>
            <p>Quick-response emergency care for critical needs.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💳 Cashless Payments</h3>
            <p>Secure and hassle-free online payment options.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Why Choose MediCare?</h2>

        <div style={styles.whyBox}>
          <p style={styles.whyText}>
            At MediCare, we believe healthcare should be simple, fast, and accessible.
            That’s why we provide:
          </p>

          <ul style={styles.whyList}>
            <li>✔ 24/7 availability with online booking</li>
            <li>✔ Trusted and qualified doctors</li>
            <li>✔ Real-time appointment updates & reminders</li>
            <li>✔ Zero waiting-time with token system</li>
            <li>✔ Secure digital storage of your medical history</li>
            <li>✔ Friendly support and smooth user experience</li>
          </ul>

          <p style={styles.whyBottom}>
            Your health is our priority — every step of the way.
          </p>
        </div>

      </section>
      <Footer />
    </div>

  );
};

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f4f7fb",
    padding: "40px 20px",
  },

  /* Header section */
  headerSection: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "18px",
    marginTop: "10px",
    marginBottom: "20px",
    color: "#555",
    maxWidth: "600px",
    marginInline: "auto",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
  },

  /* Features section */
  featuresSection: {
    marginBottom: "70px",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "30px",
    fontWeight: "600",
  },
  featuresGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    width: "280px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  cardTitle: {
    marginBottom: "10px",
    fontSize: "20px",
  },

  /* Why choose section */
  whySection: {
    marginTop: "30px",
  },
  whyBox: {
    backgroundColor: "#fff",
    width: "80%",
    margin: "auto",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  },
  whyText: {
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#444",
  },
  whyList: {
    fontSize: "16px",
    lineHeight: "30px",
    color: "#555",
  },
  whyBottom: {
    marginTop: "20px",
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
    fontSize: "17px",
  },
};

export default Home;
