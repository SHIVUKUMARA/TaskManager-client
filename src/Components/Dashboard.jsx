import React, { useState, useEffect } from "react";
import Tasklist from "./Tasklist";
import { fetchTasks, deleteTask } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedPercent: 0,
    pendingPercent: 0,
    avgCompletionTime: 0,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const getTasks = async () => {
    try {
      const { data } = await fetchTasks();
      if (Array.isArray(data)) {
        setTasks(data);

        const totalTasks = data.length;
        const completedTasks = data.filter(
          (task) => task.status === "finished"
        );
        const pendingTasks = data.filter((task) => task.status === "pending");

        const avgCompletionTime =
          completedTasks.length > 0
            ? completedTasks
                .map((task) => {
                  const start = new Date(task.startTime);
                  const end = new Date(task.endTime);
                  return (end - start) / 1000 / 3600;
                })
                .reduce((total, time) => total + time, 0) /
              completedTasks.length
            : 0;

        setStats({
          totalTasks,
          completedPercent: (totalTasks > 0
            ? (completedTasks.length / totalTasks) * 100
            : 0
          ).toFixed(2),
          pendingPercent: (totalTasks > 0
            ? (pendingTasks.length / totalTasks) * 100
            : 0
          ).toFixed(2),
          avgCompletionTime: avgCompletionTime,
        });
      } else {
        toast.error("Failed to load tasks!");
      }
    } catch (err) {
      toast.error("Failed to fetch tasks!");
    }
  };

  const editTask = (taskId) => {
    if (taskId && typeof taskId === "object") {
      taskId = taskId._id;
    }
    navigate(`/edit-task/${taskId}`);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      toast.success("Task deleted successfully!");
      getTasks();
    } catch (error) {
      toast.error("Failed to delete task!");
    }
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
    if (isLoggedIn) {
      getTasks();
    }
  }, [isLoggedIn]);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Task Dashboard</h1>
        <p className="lead">Manage your tasks efficiently</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-lg p-3 mb-4 rounded">
            <div className="card-body text-center">
              <h5 className="card-title">Total Tasks</h5>
              <h3>{stats.totalTasks}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg p-3 mb-4 rounded">
            <div className="card-body text-center">
              <h5 className="card-title">Completed</h5>
              <h3>{stats.completedPercent}%</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg p-3 mb-4 rounded">
            <div className="card-body text-center">
              <h5 className="card-title">Pending</h5>
              <h3>{stats.pendingPercent}%</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-lg p-3 mb-4 rounded">
            <div className="card-body text-center">
              <h5 className="card-title">Completion Time</h5>
              <h3>{stats.avgCompletionTime} hours(avg)</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="mb-3">Tasks</h4>
        <Tasklist
          tasks={tasks}
          editTask={editTask}
          deleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;
