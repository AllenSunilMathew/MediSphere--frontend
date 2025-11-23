"use client"

import { useState } from "react"

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      icon: "❤️",
      title: "Cardiology",
      description: "Expert cardiac care and heart disease treatment with advanced diagnostic equipment.",
      features: ["Heart Surgery", "ECG Testing", "24/7 Emergency Care"],
    },
    {
      id: 2,
      icon: "🧠",
      title: "Neurology",
      description: "Specialized neurological treatment for brain and nervous system disorders.",
      features: ["Brain Surgery", "MRI Scans", "Rehabilitation"],
    },
    {
      id: 3,
      icon: "🦴",
      title: "Orthopedics",
      description: "Comprehensive bone and joint care with minimally invasive procedures.",
      features: ["Joint Replacement", "Fracture Care", "Sports Medicine"],
    },
    {
      id: 4,
      icon: "👶",
      title: "Pediatrics",
      description: "Compassionate care for infants, children, and adolescents with dedicated pediatricians.",
      features: ["Vaccination", "Growth Monitoring", "Neonatal Care"],
    },
    {
      id: 5,
      icon: "🚑",
      title: "Emergency",
      description: "Round-the-clock emergency services with trauma and critical care specialists.",
      features: ["24/7 Availability", "Trauma Center", "ICU Support"],
    },
    {
      id: 6,
      icon: "👁️",
      title: "Ophthalmology",
      description: "Advanced eye care and vision correction using state-of-the-art technology.",
      features: ["LASIK Surgery", "Cataract Surgery", "Vision Therapy"],
    },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "100px" }}>
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
          paddingX: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "bold",
            color: "#1a2035",
            marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}
        >
          Our Medical Services
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Comprehensive healthcare solutions delivered by experienced specialists using cutting-edge medical technology.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          padding: "0 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "60px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredService === service.id ? "translateY(-8px)" : "translateY(0)",
              boxShadow:
                hoveredService === service.id ? "0 20px 40px rgba(26, 32, 53, 0.15)" : "0 4px 12px rgba(0, 0, 0, 0.08)",
              border: "1px solid #f0f0f0",
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: "48px",
                marginBottom: "20px",
                transition: "transform 0.3s ease",
                display: "inline-block",
                transform: hoveredService === service.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#1a2035",
                marginBottom: "12px",
              }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              {service.description}
            </p>

            {/* Features */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "#555",
                    opacity: hoveredService === service.id ? "1" : "0.8",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      color: "#3b82f6",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <button
              style={{
                marginTop: "20px",
                backgroundColor: hoveredService === service.id ? "#3b82f6" : "#f0f0f0",
                color: hoveredService === service.id ? "#fff" : "#1a2035",
                border: "none",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "100%",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        style={{
          backgroundColor: "#3b82f6",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: "16px",
          marginX: "20px",
          marginBottom: "60px",
          maxWidth: "1000px",
          margin: "0 auto",
          marginTop: "60px",
        }}
      >
        <h3
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Need Expert Medical Care?
        </h3>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
            opacity: "0.95",
          }}
        >
          Schedule an appointment with our specialized medical team today.
        </p>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#3b82f6",
            border: "none",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)"
            e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)"
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)"
            e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  )
}
