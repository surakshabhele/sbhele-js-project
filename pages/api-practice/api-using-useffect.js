import React, { useState } from "react";
export default function api() {
  const [obj, setObj] = useState(null);
  let msg = "";
  async function handleclick() {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const mydata = await data.json();
    setObj(mydata);
    return mydata;
  }
  console.log(obj);
  if (obj != null) {
    msg = obj.message;
  }
  return (
    <div>
      <button onClick={() => handleclick()}>clickme</button>
      {/* <pre {JSON,stringifyQuery}></pre> */}
      <img src={msg}></img>
    </div>
  );
}
