// SignupDesign.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupDesign = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const [password, setPassword] = useState()
  const navigate=useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', { name, email, password })
      .then(result =>{ console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

 
 


  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.title}>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" style={styles.input} />
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" style={styles.input} />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>REGISTER

          </button>

        </form>
        <div>
          Already have an account
          <Link to={'/login'}>
            <button style={styles.button1} className="btn btn-success">LOGIN</button>

          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  formBox: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  button1: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#30c712ff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default SignupDesign;
