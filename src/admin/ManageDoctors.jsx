import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: "", specialization: "" });
  const token = localStorage.getItem("adminToken");

  const loadDoctors = async () => {
    const res = await axios.get("http://localhost:3000/api/admin/doctors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setDoctors(res.data);
  };

  const addDoctor = async () => {
    await axios.post("http://localhost:3000/api/admin/doctors", newDoctor, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Doctor Added Successfully!");
    setNewDoctor({ name: "", specialization: "" });
    loadDoctors();
  };

  const deleteDoctor = async (id) => {
    await axios.delete(`http://localhost:3000/api/admin/doctors/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Doctor Deleted!");
    loadDoctors();
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Manage Doctors</h2>

      {/* Add doctor */}
      <div className="card p-3 mb-4">
        <h4>Add Doctor</h4>
        <input
          className="form-control mb-2"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Specialization"
          value={newDoctor.specialization}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, specialization: e.target.value })
          }
        />
        <button className="btn btn-primary" onClick={addDoctor}>
          Add Doctor
        </button>
      </div>

      {/* List doctors */}
      <h4 className="mb-3">Current Doctors</h4>
      {doctors.map((doc) => (
        <div key={doc._id} className="card p-3 mb-3">
          <h5>{doc.name}</h5>
          <p>{doc.specialization}</p>
          <button
            className="btn btn-danger"
            onClick={() => deleteDoctor(doc._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ManageDoctors;
