// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const getColleges = () => api.get('/college');
export const addCollege = (collegeData) => api.post('/college/add', collegeData);
export const getCourses = () => api.get('/course');
export const addCourse = (courseData) => api.post('/course/add', courseData);

export default api;
