import React, { useState, useEffect } from "react";
import api from "../src/api/api-service";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    patientName: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/appointments", form);
      const appt = res.data.appointment;
      alert(`Appointment booked! Token: ${appt.tokenNumber}`);
      navigate("/appointmentrecords");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        background: "linear-gradient(135deg, #43cea2, #185a9d)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "rgba(255,255,255,0.9)",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: "#185a9d",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Book Appointment
        </h3>

        <input
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          required
          style={inputStyle}
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          style={inputStyle}
        />

        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          required
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">Select Doctor</option>
          <option value="Dr. John">Dr. John</option>
          <option value="Dr. Neha">Dr. Neha</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Symptoms"
          style={{ ...inputStyle, height: 80, resize: "none" }}
        />

        <button
          type="submit"
          style={{
            background: "#185a9d",
            color: "#fff",
            padding: "12px 0",
            border: "none",
            borderRadius: 10,
            fontSize: 16,
            cursor: "pointer",
            transition: "0.3s",
            marginTop: 5,
          }}
          onMouseOver={(e) => (e.target.style.background = "#144a80")}
          onMouseOut={(e) => (e.target.style.background = "#185a9d")}
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #ccc",
  outline: "none",
  fontSize: 15,
  background: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  transition: "0.3s",
};