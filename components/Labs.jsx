import React, { useEffect, useState } from "react";
import api from "../src/api/api-service";
import { useNavigate } from "react-router-dom";

export default function Labs() {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [time, setTime] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [addedTests, setAddedTests] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const labTests = [
    { id: 1, name: "Complete Blood Count (CBC)", price: 300 },
    { id: 2, name: "Blood Sugar Test", price: 150 },
    { id: 3, name: "Urine Test", price: 200 },
    { id: 4, name: "Liver Function Test", price: 600 },
  ];

  const handleAddTest = () => {
    if (!selectedTest) return alert("Select a test");
    const testObj = labTests.find((t) => t.id === parseInt(selectedTest));
    setAddedTests((p) => [...p, testObj]);
    setSelectedTest("");
  };

  const handleConfirm = async () => {
    if (!patientName || !time || addedTests.length === 0)
      return alert("Fill details");
    try {
      const total = addedTests.reduce((s, t) => s + t.price, 0);
      const res = await api.post("/labs", {
        test: addedTests.map((t) => t.name).join(", "),
        price: total,
        patientName,
        date: new Date().toLocaleDateString(),
        time,
      });
      alert("Lab booking successful");
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Lab booking failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
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
        Lab Test Booking
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: 450,
          background: "rgba(255,255,255,0.9)",
          padding: 25,
          borderRadius: 16,
          boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <input
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={inputStyle}
        />

        <select
          value={selectedTest}
          onChange={(e) => setSelectedTest(e.target.value)}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">-- Select Test --</option>
          {labTests.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} - ₹{t.price}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddTest}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#4b79c7")}
          onMouseOut={(e) => (e.target.style.background = "#5c89ff")}
        >
          Add Test
        </button>

        <div
          style={{
            background: "#ffffffdd",
            padding: 15,
            borderRadius: 12,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ marginBottom: 10 }}>Added Tests</h4>
          {addedTests.length === 0 ? (
            <p style={{ color: "#666" }}>No tests added</p>
          ) : (
            addedTests.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #ddd",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {t.name} – ₹{t.price}
              </div>
            ))
          )}
        </div>

        <button
          onClick={handleConfirm}
          style={{
            ...buttonStyle,
            background: "#0fb87e",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0a9b69")}
          onMouseOut={(e) => (e.target.style.background = "#0fb87e")}
        >
          Confirm Booking
        </button>
      </div>
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

const buttonStyle = {
  background: "#5c89ff",
  color: "#fff",
  padding: "12px 0",
  border: "none",
  borderRadius: 10,
  fontSize: 16,
  cursor: "pointer",
  transition: "0.3s",
};
