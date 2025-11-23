import React from "react";

function ExploreMore() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Explore More</h1>
        <p style={styles.subtitle}>
          Discover our commitment to healthcare excellence, growth, and innovation.
        </p>
      </div>

      <div style={styles.cardContainer}>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🏥 Excellence in Healthcare</h2>
          <p style={styles.cardText}>
            Our mission is to deliver top-class medical services using advanced technologies,
            highly skilled professionals, and patient-centric care.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📈 Rapid Growth & Innovation</h2>
          <p style={styles.cardText}>
            From specialized departments to AI-powered diagnostics, we are expanding
            continuously to bring world-class healthcare to everyone.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🤝 Patient Trust & Safety</h2>
          <p style={styles.cardText}>
            Your trust drives us. We follow strict safety protocols, hygiene standards,
            and transparent healthcare practices.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>⚕️ Advanced Medical Services</h2>
          <p style={styles.cardText}>
            From emergency care to specialized treatments, lab diagnostics,
            surgery, and telemedicine — we cover all your healthcare needs.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🌐 Digital Healthcare</h2>
          <p style={styles.cardText}>
            With online appointments, digital prescriptions, and health monitoring,
            your medical journey becomes seamless and simple.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🏆 Achievements & Recognition</h2>
          <p style={styles.cardText}>
            Award-winning doctors, top-tier patient satisfaction scores, and advanced
            treatment success rates make us a trusted healthcare partner.
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "40px 20px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1e3a8a",
  },
  subtitle: {
    fontSize: "18px",
    color: "#475569",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "0 10px",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#1e293b",
  },
  cardText: {
    fontSize: "15px",
    color: "#475569",
    lineHeight: "1.5",
  }
};

export default ExploreMore;
