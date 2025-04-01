import axios from "axios";

const API_BASE_URL = "https://taskmanager-server-elb8.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = (credentials) => api.post("/auth/login", credentials);
export const register = (userData) => api.post("/auth/register", userData);

export const fetchTasks = () => api.get("/tasks");
export const fetchTaskById = (taskId) => api.get(`/tasks/${taskId}`);
export const createTask = (taskData) => api.post("/tasks", taskData);
export const updateTask = (taskId, updates) =>
  api.put(`/tasks/${taskId}`, updates);
export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);
