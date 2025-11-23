
import SERVERURL from './SERVEURL'
import commonAPI from "./commonAPI"
import axios from 'axios';




// Auth
export const registerApi = (body) => axios.post(`${SERVERURL}/auth/register`, body);
export const loginApi = (body) => axios.post(`${SERVERURL}/auth/login`, body);
export const googleLoginApi = (body) =>
  axios.post(`${SERVERURL}/auth/google-login`, body);

// Appointments
export const addAppointmentApi = (data) => axios.post(`${SERVERURL}/api/appointments/add`, data);
export const getAppointmentsApi = () => axios.get(`${SERVERURL}/api/appointments/all`);
