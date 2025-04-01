import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createTask, updateTask } from "../services/api";
import { useNavigate } from "react-router-dom";

const Taskform = ({ taskData = {}, onSubmit }) => {
  const [title, setTitle] = useState(taskData.title || "");
  const [startTime, setStartTime] = useState(taskData.startTime || "");
  const [endTime, setEndTime] = useState(taskData.endTime || "");
  const [priority, setPriority] = useState(taskData.priority || 1);
  const [status, setStatus] = useState(taskData.status || "pending");

  const navigate = useNavigate();

  useEffect(() => {
    if (taskData._id) {
      setTitle(taskData.title);
      setStartTime(taskData.startTime);
      setEndTime(taskData.endTime);
      setPriority(taskData.priority);
      setStatus(taskData.status);
    }
  }, [taskData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      title,
      startTime,
      endTime,
      priority,
      status,
    };

    try {
      if (taskData._id) {
        await updateTask(taskData._id, task);
        toast.success("Task updated successfully!");
      } else {
        await createTask(task);
        toast.success("Task created successfully!");
      }

      navigate("/");
    } catch (error) {
      toast.error("An error occurred while saving the task.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5  col-md-6 mb-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-center mb-4 fw-bold">
            {taskData._id ? "Update Task" : "Create Task"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter task title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">
                Start Time
              </label>
              <input
                type="datetime-local"
                id="startTime"
                className="form-control"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endTime" className="form-label">
                End Time
              </label>
              <input
                type="datetime-local"
                id="endTime"
                className="form-control"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <select
                id="priority"
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
              >
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                id="status"
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="finished">Finished</option>
              </select>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary w-auto">
                {taskData._id ? "Update Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Taskform;
