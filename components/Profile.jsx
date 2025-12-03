import React, { useEffect, useState } from "react";
import api from "../src/api/api-service";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async () => {
    try {
      const res = await api.get("/profile");
      setUser(res.data.user);
    } catch (err) {
      console.error("Profile load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading profile...</div>;

  if (!user) return <div style={{ padding: 20 }}>No user data found.</div>;

  return (
    <div style={{ padding: 20, fontWeight:"bold" }}>
      <h2 style={{ marginBottom: 10 }}>{user.username}</h2>

      {/* ---------------------- APPOINTMENTS -------------------------- */}
      <section style={{ marginTop: 20 }}>
        <h3>📌 Appointments</h3>
        {user.appointments && user.appointments.length > 0 ? (
          user.appointments.map((a) => (
            <div
              key={a._id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <b>{a.doctor}</b>
              <div>{a.date} — {a.time}</div>
              <div>Token: {a.tokenNumber}</div>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </section>

      {/* ---------------------- BOOKINGS -------------------------- */}
      <section style={{ marginTop: 20 }}>
        <h3>📘 Bookings</h3>
        {user.bookings && user.bookings.length > 0 ? (
          user.bookings.map((b, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              {b}
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </section>

      {/* ---------------------- LAB TESTS -------------------------- */}
      <section style={{ marginTop: 20 }}>
        <h3>🧪 Lab Tests</h3>
        {user.labTests && user.labTests.length > 0 ? (
          user.labTests.map((l) => (
            <div
              key={l._id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <b>{l.test}</b> — {l.date}
            </div>
          ))
        ) : (
          <p>No lab tests found.</p>
        )}
      </section>
    </div>
  );
}