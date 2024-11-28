import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTaskById, updateTask } from "../services/api"; // API calls
import Taskform from "./Taskform"; // Re-use Taskform component

const Edittask = () => {
  const { taskId } = useParams(); // Get the taskId from the URL params
  const navigate = useNavigate(); // To navigate after task update
  const [task, setTask] = useState(null); // State to store fetched task data

  // Fetch the task data when the component mounts
  useEffect(() => {
    const getTaskData = async () => {
      try {
        const { data } = await fetchTaskById(taskId); // API call to get the task by ID
        setTask({
          ...data,
          startTime: data.startTime
            ? new Date(data.startTime).toISOString().slice(0, 16) // Format startTime
            : "",
          endTime: data.endTime
            ? new Date(data.endTime).toISOString().slice(0, 16) // Format endTime
            : "",
        });
      } catch (error) {
        console.error("Failed to fetch task!", error); // Log error if task fetch fails
      }
    };
    getTaskData();
  }, [taskId]); // Re-fetch task when taskId changes

  // Handle task update submission
  const handleSubmit = async (updatedTaskData) => {
    try {
      // If task status is "finished" but no endTime, set it to current time
      if (updatedTaskData.status === "finished" && !updatedTaskData.endTime) {
        updatedTaskData.endTime = new Date().toISOString();
      }

      // Update the task with the updated data
      await updateTask(taskId, updatedTaskData);
      // After successful update, navigate back to home page or tasks list
      navigate("/");
    } catch (error) {
      console.error("Failed to update task!", error); // Log error if update fails
    }
  };

  // If task data is not loaded yet, show a loading message
  if (!task) return <p>Loading task...</p>;

  return (
    <div className="container mt-5">
      {/* Pass the task data and handleSubmit function to Taskform */}
      <Taskform taskData={task} onSubmit={handleSubmit} />
    </div>
  );
};

export default Edittask;
