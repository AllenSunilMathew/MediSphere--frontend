"use client"

import { useState } from "react"

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)

  const footerStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "60px 40px 20px",
    marginTop: "80px",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  }

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    marginBottom: "40px",
  }

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000000",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  }

  const linkStyle = (isHovered) => ({
    color: isHovered ? "#3b82f6" : "#374151",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    paddingLeft: "8px",
    borderLeft: isHovered ? "3px solid #3b82f6" : "3px solid transparent",
  })

  const socialIconStyle = (isHovered) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: isHovered ? "#3b82f6" : "#e5e7eb",
    color: isHovered ? "#ffffff" : "#000000",
    textDecoration: "none",
    marginRight: "12px",
    transition: "all 0.3s ease",
    fontSize: "18px",
    cursor: "pointer",
  })

  const dividerStyle = {
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    margin: "30px 0",
  }

  const bottomStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    fontSize: "13px",
    color: "#6b7280",
  }

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "18px",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "12px",
  }

  const logoCircleStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* About Section */}
        <div style={columnStyle}>
          <div style={logoStyle}>
            <div style={logoCircleStyle}>M</div>
            MediSphere
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#374151", margin: 0 }}>
            Leading healthcare solutions with innovative medical technology and patient-centered care.
          </p>
        </div>

        {/* Quick Links */}
        <div style={columnStyle}>
          <h3 style={titleStyle}>Quick Links</h3>
          {["About Us", "Services", "Blog", "Careers", "FAQ"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={linkStyle(hoveredLink === `link-${index}`)}
              onMouseEnter={() => setHoveredLink(`link-${index}`)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Support */}
        <div style={columnStyle}>
          <h3 style={titleStyle}>Support</h3>
          {["Help Center", "Contact Us", "Documentation", "Privacy Policy", "Terms of Service"].map((link, index) => (
            <a
              key={index}
              href="#"
              style={linkStyle(hoveredLink === `support-${index}`)}
              onMouseEnter={() => setHoveredLink(`support-${index}`)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact & Social */}
        <div style={columnStyle}>
          <h3 style={titleStyle}>Contact</h3>
          <a
            href="mailto:hello@medisphere.com"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            hello@medisphere.com
          </a>
          <a
            href="tel:+1234567890"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            +1 (234) 567-890
          </a>
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            {["facebook", "twitter", "linkedin", "instagram"].map((social, index) => (
              <a
                key={index}
                href="#"
                style={socialIconStyle(hoveredLink === `social-${index}`)}
                onMouseEnter={() => setHoveredLink(`social-${index}`)}
                onMouseLeave={() => setHoveredLink(null)}
                title={social}
              >
                {social === "facebook" && "∫"}
                {social === "twitter" && "𝕏"}
                {social === "linkedin" && "in"}
                {social === "instagram" && "◆"}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={dividerStyle}></div>

      {/* Bottom Section */}
      <div style={bottomStyle}>
        <div>© 2025 MediSphere. All rights reserved.</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
            Privacy
          </a>
          <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
            Terms
          </a>
          <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
            Cookies
          </a>
        </div>
      </div>
    </footer>
  )
}
