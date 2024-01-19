import { userouter } from "next/router";
import React from "react";
import { useState } from "react";

function Description({ descriptionrender }) {
  // console.log("hu", descriptionrender);
  const [descriptionList, setDiscriptionList] = useState("");
  const [changeDescription, setChangeDescription] = useState(true);
  // const [modifyData, setModifyData] = useState();
  const changeData = async (id) => {
    console.log('hhhhh')
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        description: descriptionList,
      }),
    });
    const incomingChange = await response.json();
    if (response.ok) {
      setChangeDescription(false);
    }
    console.log(incomingChange, "incoming");
    return incomingChange;
    // setChangeDescription(incomingChange);
    // console.log(incomingChange, "h");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(descriptionrender);
    // setDiscriptionList(item.description);
    // setShowDescription(true);
    // setTaskId(item.id);
    // setChangeDescription();
  };
  return (
    <div className="discription-page">
      <form onSubmit={handleSubmit}>
        <title className="description-title">Description</title>
        <input
          id="descriptionList"
          // value={descriptionrender.descriptionList}
          placeholder="Description"
          type="text"
          style={{ width: 400, height: 200 }}
          onBlur={(e) => setDiscriptionList(e.target.value)}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{ cursor: "pointer" }}
          onClick={() => {
            // setDiscriptionList(item.description);
            // setShowDescription(true);
            // setTaskId(item.id);
            setChangeDescription();
          }}
        >
          Save
        </button>
        <br />
        <br />
        <button type="reset" style={{ cursor: "pointer" }}>
          {/* {descriptionList? <button onclick={()=>(null):descriptionList}> </button>} */}
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Description;
