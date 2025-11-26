import React, { useEffect, useState } from "react";
import api from "../api/api-service";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import toast, { Toaster } from "react-hot-toast";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ appointments: 0, labs: 0, users: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !localStorage.getItem("admin")) navigate("/login");

    const fetchStats = async () => {
      try {
        const appt = await api.getAppointmentsApi();
        const labs = await api.getLabsApi();
        const users = await api.getUsersApi();
        setStats({ appointments: appt.data.appointments.length, labs: labs.data.labs.length, users: users.data.users.length });
      } catch(err) { toast.error("Error fetching stats") }
    };
    fetchStats();
  }, [navigate]);

  const data = {
    labels: ["Appointments", "Lab Bookings", "Users"],
    datasets: [{ label: 'Counts', data: [stats.appointments, stats.labs, stats.users], backgroundColor: ["#185a9d","#0fb87e","#f39c12"] }]
  };

  return (
    <div style={{ padding: 20 }}>
      <Toaster position="top-right" />
      <h2>Admin Dashboard</h2>
      <div style={{ maxWidth: 600, margin: "20px 0" }}>
        <Bar data={data} />
      </div>
      <div style={{ display:"flex", gap:20 }}>
        <div style={styles.card}>Appointments: {stats.appointments}</div>
        <div style={styles.card}>Lab Bookings: {stats.labs}</div>
        <div style={styles.card}>Users: {stats.users}</div>
      </div>
    </div>
  );
}

const styles = {
  card:{ background:"#fff", padding:20, borderRadius:12, boxShadow:"0 4px 12px rgba(0,0,0,0.1)", flex:1, textAlign:"center", fontSize:18, fontWeight:600 }
};
