"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const features = [
    {
      icon: "🏥",
      title: "State-of-the-Art Facilities",
      description: "Equipped with the latest medical technology and infrastructure",
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Doctors",
      description: "500+ highly qualified and experienced medical professionals",
    },
    {
      icon: "💊",
      title: "Comprehensive Care",
      description: "From emergency to preventive care, we cover all specialties",
    },
    {
      icon: "🏆",
      title: "Award-Winning Service",
      description: "Recognized nationally for excellence in patient care",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialization: "Cardiology",
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Neurology",
      specialization: "Neurosurgery",
    },
    {
      name: "Dr. Emma Williams",
      role: "Director of Emergency",
      specialization: "Emergency Medicine",
    },
    {
      name: "Dr. Rajesh Patel",
      role: "Chief of Surgery",
      specialization: "General Surgery",
    },
  ]

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "100K+", label: "Patients Treated" },
    { number: "500+", label: "Medical Staff" },
    { number: "24/7", label: "Emergency Service" },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>About MediSphere</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#e0e7ff" }}>
          Transforming Healthcare, One Patient at a Time
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          {/* Mission */}
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "15px" }}>Our Mission</h2>
            <p style={{ color: "#475569", lineHeight: "1.6", fontSize: "1rem" }}>
              To deliver exceptional, patient-centered healthcare with compassion, innovation, and excellence. We are
              committed to improving the health and wellbeing of our community through advanced medical treatments and
              preventive care.
            </p>
          </div>

          {/* Vision */}
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "15px" }}>Our Vision</h2>
            <p style={{ color: "#475569", lineHeight: "1.6", fontSize: "1rem" }}>
              To be the most trusted and leading healthcare provider, recognized globally for medical excellence,
              innovation, and patient satisfaction. We envision a future where quality healthcare is accessible to all.
            </p>
          </div>

          {/* Values */}
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "15px" }}>Our Values</h2>
            <p style={{ color: "#475569", lineHeight: "1.6", fontSize: "1rem" }}>
              Integrity, Compassion, Excellence, Innovation, and Patient-Centricity. These core values guide every
              decision we make and every action we take in our commitment to healthcare excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f1f5f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#0f172a",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Why Choose MediSphere?
          </h2>
          <p style={{ textAlign: "center", color: "#475569", marginBottom: "50px", fontSize: "1.1rem" }}>
            Decades of excellence combined with cutting-edge medical innovation
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "10px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  boxShadow:
                    hoveredCard === index ? "0 12px 24px rgba(0, 0, 0, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.05)",
                  transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{feature.icon}</div>
                <h3 style={{ fontSize: "1.3rem", color: "#0f172a", marginBottom: "10px", fontWeight: "600" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "#64748b", lineHeight: "1.5" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>
            Our Impact in Numbers
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#60a5fa", marginBottom: "10px" }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: "1.1rem", color: "#e0e7ff" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#0f172a",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Meet Our Medical Team
        </h2>
        <p style={{ textAlign: "center", color: "#475569", marginBottom: "50px", fontSize: "1.1rem" }}>
          Highly qualified doctors and healthcare professionals dedicated to your care
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8fafc",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                border: "2px solid #e2e8f0",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3b82f6"
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(59, 130, 246, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                  margin: "0 auto 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                👨‍⚕️
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "#0f172a", marginBottom: "5px", fontWeight: "600" }}>
                {member.name}
              </h3>
              <p style={{ color: "#3b82f6", fontWeight: "600", marginBottom: "8px" }}>{member.role}</p>
              <p style={{ color: "#64748b", fontSize: "0.95rem" }}>Specializing in {member.specialization}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "15px" }}>
          Ready to Experience Excellence?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "30px",
            color: "#e0e7ff",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          Schedule your appointment today and join thousands of satisfied patients
        </p>
    <Link to={'/appoinments'}>
          <button
            style={{
              backgroundColor: "#60a5fa",
              color: "#0f172a",
              padding: "15px 40px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#3b82f6"
              e.currentTarget.style.transform = "translateY(-3px)"
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(59, 130, 246, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#60a5fa"
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            BOOK AN APPOINTMENT
          </button>
    </Link>
      </section>
    </div>
  )
}
