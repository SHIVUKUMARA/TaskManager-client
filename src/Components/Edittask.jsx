import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTaskById, updateTask } from "../services/api";
import Taskform from "./Taskform";

const Edittask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const getTaskData = async () => {
      try {
        const { data } = await fetchTaskById(taskId);
        setTask({
          ...data,
          startTime: data.startTime
            ? new Date(data.startTime).toISOString().slice(0, 16)
            : "",
          endTime: data.endTime
            ? new Date(data.endTime).toISOString().slice(0, 16)
            : "",
        });
      } catch (error) {
        console.error("Failed to fetch task!", error);
      }
    };
    getTaskData();
  }, [taskId]);

  const handleSubmit = async (updatedTaskData) => {
    try {
      if (updatedTaskData.status === "finished" && !updatedTaskData.endTime) {
        updatedTaskData.endTime = new Date().toISOString();
      }

      await updateTask(taskId, updatedTaskData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update task!", error);
    }
  };

  if (!task) return <p>Loading task...</p>;

  return (
    <div className="container mt-5">
      <Taskform taskData={task} onSubmit={handleSubmit} />
    </div>
  );
};

export default Edittask;
