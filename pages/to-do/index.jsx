import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import DeletIcon from "./delete";
import Description from "./description";
import PlusIcon from "./plus-icon";
// import CreateNewTask from "./createtask";
function TaskToDo(id) {
  const router = useRouter();
  const [data, setData] = useState();
  const taskList = async () => {
    // console.log("inside create todo");
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const incoming = await response.json();
    setData(incoming);
    // console.log("hi", data);
  };
  useEffect(() => {
    taskList();
    // deletcount();
    // console.log("tasklist", data);
  }, []);
  const [delet, setDelete] = useState();
  const deleteCount = async (id) => {
    // console.log("on", id);
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const deleted = await response.json();
    setDelete(deleted);
    // console.log(deleted);
  };
  const quaryClient = useQueryClient();
  // const taskQuery = useQuery();
  const deleteTaskMut = useMutation({
    mutationFn: deleteCount,
    onSuccess: async () => {
      // await taskList();
      // console.log("succesfull");
      // quaryClient.invalidateQueries("");
      await taskList();
    },
  });
  // console.log("deleteTaskMut", deleteTaskMut);
  const [descriptionList, setdescriptionList] = useState("");
  const [showdescription, setShowDescription] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const [enableEdit, setEnableEdit] = useState(false);
  // console.log(showdescription)
  return (
    <div className="to-do-app">
      <div className="to-do">
        <div className="create-task">
          <div className="list-task">
            {data
              ? data.data.map((item, index) => {
                  return (
                    <div className="task-name"  key={index}>
                      <span
                        className="title-fill"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setdescriptionList(item.description);
                          setShowDescription(true);
                          setTaskId(item.id);
                        }}
                      >
                        {item.title}
                      </span>
                      <button
                        className="delete-btn"
                        onClick={
                          () => {
                            // console.log(item.id);
                            deleteTaskMut.mutate(item.id);
                          }
                          // handleClick(item.id);
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <DeletIcon />
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
          <button
            className="new-task"
            onClick={() => router.push("/to-do/createtask")}
          >
            Create New Task
          </button>
        </div>
        <div className="description-box">
          <div className="description">
            <h1>Task To Do</h1>
            <div className="show-description">
              {showdescription ? (
                <span>
                  {descriptionList}
                  <button onClick={() => setEnableEdit(true)}>
                    <PlusIcon />
                  </button>
                </span>
              ) : null}
            </div>
            {enableEdit ? (
              <div>
                <Description descriptionrender={taskId} />
              </div>
            ) : null}
          </div>
          {/* <div className="enter-descr">
            {showdescription ? showdescription : null}
            <Description descriptionrender={{ descriptionList }} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TaskToDo;
