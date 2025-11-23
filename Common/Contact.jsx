"use client"

import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      padding: "40px 20px",
      fontFamily: "Geist, sans-serif",
    },
    wrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "800",
      color: "#1e293b",
      marginBottom: "12px",
      background: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "18px",
      color: "#64748b",
      marginBottom: "40px",
    },
    content: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "start",
      marginBottom: "60px",
    },
    formSection: {
      background: "white",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 10px 40px rgba(2, 132, 199, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    formSectionHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 60px rgba(2, 132, 199, 0.15)",
    },
    infoSection: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "30px",
    },
    infoCard: {
      background: "white",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 10px 40px rgba(2, 132, 199, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    infoCardHover: {
      transform: "translateX(10px)",
      boxShadow: "0 15px 50px rgba(2, 132, 199, 0.15)",
    },
    infoTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#0369a1",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    infoText: {
      fontSize: "16px",
      color: "#475569",
      lineHeight: "1.6",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "14px",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      fontFamily: "inherit",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    inputFocus: {
      outline: "none",
      borderColor: "#0ea5e9",
      boxShadow: "0 0 0 3px rgba(14, 165, 233, 0.1)",
    },
    textarea: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "14px",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      fontFamily: "inherit",
      minHeight: "120px",
      resize: "vertical",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    textareaFocus: {
      outline: "none",
      borderColor: "#0ea5e9",
      boxShadow: "0 0 0 3px rgba(14, 165, 233, 0.1)",
    },
    button: {
      width: "100%",
      padding: "14px 28px",
      fontSize: "16px",
      fontWeight: "700",
      color: "white",
      background: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "10px",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 25px rgba(2, 132, 199, 0.3)",
    },
    successMessage: {
      background: "#d1fae5",
      color: "#065f46",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      animation: "slideIn 0.3s ease",
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "40px",
    },
    contactItem: {
      textAlign: "center",
      padding: "20px",
    },
    contactIcon: {
      fontSize: "32px",
      marginBottom: "10px",
    },
  }

  const [formHover, setFormHover] = React.useState(false)
  const [inputFocus, setInputFocus] = React.useState(null)

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }
      `}</style>

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Get In Touch</h1>
          <p style={styles.subtitle}>
            We're here to help! Reach out to us with any questions or concerns about our healthcare services.
          </p>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          {/* Contact Form */}
          <div
            style={{
              ...styles.formSection,
              ...(formHover ? styles.formSectionHover : {}),
            }}
            onMouseEnter={() => setFormHover(true)}
            onMouseLeave={() => setFormHover(false)}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", marginBottom: "25px" }}>
              Send us a Message
            </h2>

            {submitted && (
              <div style={styles.successMessage}>
                <span>✓</span>
                <span>Message sent successfully! We'll be in touch soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  style={styles.input}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject *</label>
                <input
                  style={styles.input}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  style={styles.textarea}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                style={styles.button}
                type="submit"
                onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, { transform: "none", boxShadow: "none" })}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={styles.infoSection}>
            {[
              { title: "📞 Phone", info: "+1 (555) 123-4567", subtitle: "Available 24/7" },
              { title: "📧 Email", info: "hello@medisphere.com", subtitle: "Response within 24 hours" },
              { title: "📍 Location", info: "123 Medical Center Drive", subtitle: "New York, NY 10001" },
              { title: "⏰ Hours", info: "Mon - Fri: 8AM - 8PM", subtitle: "Sat - Sun: 10AM - 6PM" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={styles.infoCard}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.infoCardHover)}
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, { transform: "none", boxShadow: styles.infoCard.boxShadow })
                }
              >
                <div style={styles.infoTitle}>{item.title}</div>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#0369a1", marginBottom: "4px" }}>
                  {item.info}
                </div>
                <div style={{ fontSize: "14px", color: "#94a3b8" }}>{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Grid */}
        <div style={styles.contactGrid}>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>🏥</div>
            <h3 style={{ color: "#0369a1", marginBottom: "8px", fontWeight: "700" }}>Emergency</h3>
            <p style={{ color: "#64748b" }}>Dial 911 or visit our ER immediately</p>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>💬</div>
            <h3 style={{ color: "#0369a1", marginBottom: "8px", fontWeight: "700" }}>Live Chat</h3>
            <p style={{ color: "#64748b" }}>Chat with our support team now</p>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>📋</div>
            <h3 style={{ color: "#0369a1", marginBottom: "8px", fontWeight: "700" }}>Appointment</h3>
            <p style={{ color: "#64748b" }}>Book your appointment online</p>
          </div>
        </div>
      </div>
    </div>
  )
}
