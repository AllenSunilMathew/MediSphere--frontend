import React, { useState } from "react";
import api from "../src/api/api-service";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", { username: form.username, email: form.email, password: form.password });
      alert("Registration successful. Please login.");
      setIsRegister(false);
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration error");
    }
  };

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/login", { email: form.email, password: form.password });
    const { token, user } = res.data;
    
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    alert("Login successful");

    // 🔹 If admin → go to admin dashboard
    if (user?.role === "admin") {
      navigate("/admindashboard");
    } else {
      navigate("/");
    }

  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Login failed");
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
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: "#ffffffd9",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
          transition: "transform 0.3s",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: 20, color: "#333" }}>
          {isRegister ? "Create an Account" : "Welcome Back"}
        </h3>

        <form
          onSubmit={isRegister ? handleRegister : handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {isRegister && (
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          )}

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="password"
            placeholder="Password"
            value={form.password}
            type="password"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              background: "#4e54c8",
              color: "#fff",
              padding: "10px 0",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 16,
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3e44a5")}
            onMouseOut={(e) => (e.target.style.background = "#4e54c8")}
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{
              background: "transparent",
              border: "none",
              color: "#4e54c8",
              fontSize: 15,
              cursor: "pointer",
              marginTop: 10,
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#2b2f85")}
            onMouseOut={(e) => (e.target.style.color = "#4e54c8")}
          >
            {isRegister ? "Already have an account? Login" : "Create new account"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ✨ Reusable Input Style
const inputStyle = {
  padding: "12px",
  borderRadius: 8,
  border: "1px solid #ccc",
  fontSize: 15,
  outline: "none",
  transition: "0.3s",
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};
