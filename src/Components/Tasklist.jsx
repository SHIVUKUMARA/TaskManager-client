import React from "react";

const Tasklist = ({ tasks = [], editTask, deleteTask }) => {
  if (!Array.isArray(tasks)) {
    return <p>Error: tasks data is not an array.</p>;
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Priority</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="text-center">
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{new Date(task.startTime).toLocaleString()}</td>
                <td>{new Date(task.endTime).toLocaleString()}</td>
                <td>
                  <span
                    className={`badge p-2 fw-bold ${
                      task.status === "finished"
                        ? "bg-success"
                        : task.status === "pending"
                        ? "bg-warning"
                        : "bg-secondary"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => editTask(task)} 
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task._id)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tasklist;
