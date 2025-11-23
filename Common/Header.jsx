import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header style={{ padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>MediSphere</h2>
      </Link>

      <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/appointments"><button className="btn btn-primary">Book Appointment</button></Link>
        <Link to="/labs"><button className="btn btn-warning">Labs</button></Link>

        {user ? (
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setOpen(!open)}
              style={{ borderRadius: 20, width: 40, height: 40, cursor: "pointer" }}
              title={user.username}
            >
              {user.username[0].toUpperCase()}
            </button>

            {open && (
              <div style={{ position: "absolute", right: 0, top: 44, background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.12)", borderRadius: 8, padding: 8 }}>
                <button style={{ display: "block", width: "100%", textDecorationColor:'red' }} onClick={() => { navigate("/profile"); setOpen(false); }}>
                  View Profile
                </button>
                <button style={{ display: "block", width: "100%", marginTop: 8, color:"red" }} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
        )}
      </nav>
    </header>
  );
}
