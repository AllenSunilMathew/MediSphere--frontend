import React, { useEffect, useState } from "react";
import api from "../src/api/api-service";

export default function AppointmentRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await api.get("/appointments");
        setRecords(res.data.appointments || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: 28,
          color: "#333",
          marginBottom: 20,
          fontWeight: 700,
        }}
      >
        Your Appointments
      </h2>

      {records.length === 0 ? (
        <p
          style={{
            background: "rgba(255,255,255,0.8)",
            padding: "15px 20px",
            borderRadius: 12,
            fontSize: 18,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          No appointments found.
        </p>
      ) : (
        <div style={{ width: "100%", maxWidth: 600 }}>
          {records.map((r) => (
            <div
              key={r._id}
              style={{
                background: "rgba(255,255,255,0.9)",
                padding: 20,
                marginBottom: 15,
                borderRadius: 14,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                backdropFilter: "blur(6px)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 14px 35px rgba(0,0,0,0.22)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 5 }}>
                {r.patientName}
              </div>

              <div style={{ fontSize: 16, color: "#555" }}>
                Doctor: <b>{r.doctor}</b>
              </div>

              <div style={{ marginTop: 6, color: "#444" }}>
                📅 {r.date} &nbsp; ⏰ {r.time}
              </div>

              <div
                style={{
                  marginTop: 8,
                  background: "#fcb69f",
                  padding: "6px 12px",
                  display: "inline-block",
                  borderRadius: 8,
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Token: {r.tokenNumber}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
