import './App.css';
import Header from '../Common/Header';
import Home from '../Common/Home';
import Contact from '../Common/contact';
import About from '../Common/About';
import Services from '../Common/Services';
import Auth from '../components/Auth';
import Appointment from '../components/Appoinment';
import AppointmentRecords from '../components/AppoinmentRecords';
import Register from '../components/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Labs from '../components/Labs';
import Profile from '../components/Profile';
import PNF from '../Common/pnf';
import ExploreMore from '../Common/EXplore';
import AdminDashboard from './admin/AdminDashboard';
import ManageDoctors from './admin/ManageDoctors';

function App() {

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admins";
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/appointmentrecords" element={<AppointmentRecords />} />
        <Route path="/register" element={<Register />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="**" element={<PNF />} />
        <Route path="explore" element={<ExploreMore />} />

        {/* 🔐 Admin Only Routes */}
      <Route
  path="admindashboard"
  element={
    isAdmin ? <AdminDashboard /> : <Home />
  }
/>
<Route
  path="admindashboard"
  element={isAdmin ? <AdminDashboard /> : <PNF />}
/>
        <Route
          path="managedoctors"
          element={isAdmin ? <ManageDoctors /> : <Home />}
        />

      </Routes>
    </>
  );
}

export default App;
