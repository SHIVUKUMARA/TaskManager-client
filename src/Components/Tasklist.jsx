import React from "react";

const Tasklist = ({ tasks = [], editTask, deleteTask }) => {
  if (!Array.isArray(tasks)) {
    return <p>Error: tasks data is not an array.</p>;
  }

  // Function to convert priority number to text
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      default:
        return "Unknown";
    }
  };

  const capitalizeStatus = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table table-responsive">
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
                    <td>{getPriorityLabel(task.priority)}</td>
                    <td>
                      {new Date(task.startTime).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" | "}
                      {new Date(task.startTime).toLocaleTimeString()}
                    </td>
                    <td>
                      {new Date(task.endTime).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" | "}
                      {new Date(task.endTime).toLocaleTimeString()}
                    </td>
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
                        {capitalizeStatus(task.status)}
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
      </div>
    </div>
  );
};

export default Tasklist;
