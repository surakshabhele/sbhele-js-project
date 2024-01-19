import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
// import { createToDo } from "../../services/index";

function CreateNewTask() {
  const router = useRouter();
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const fetchList = async (task) => {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: task,
      }),
    });
    const incomingData = await response.json();
    setData(incomingData);
    // const outData = await response.json();
    // if (!response.ok) {
    //   throw { statusText: response.statusText, statusCode: response.status };
    // }
    // return outData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("task", e);
    // console.log(task);
    if (task) {
      fetchList(task);
    } else {
      null;
    }
    // const fetchData = fetchList();
    // console.log(fetchData);
  };
  return (
    <div className="create-new-task">
      <div className="task-to">
        <span className="title">Create New Task</span>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input
              // onBlur={(e) => handleBlur(e)}
              onChange={(e) => setTask(e.target.value)}
              className="enter-task"
            />

            <button
              className="create-btn"
              type="submit"
              onClick={() => router.push("/to-do")}
            >
              Create
            </button>
            <button className="cancel" onClick={() => router.push("/to-do")}>
              Cancel
            </button>
          </div>
        </form>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </div>
  );
}

export default CreateNewTask;
