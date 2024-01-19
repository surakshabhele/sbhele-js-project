import React, { useState } from "react";

export default function ApiPractice() {
  const [obj, setObj] = useState({});
  async function handleclick() {
    const data = await fetch("https:zoo-animal-api.herokuapp.com/animals/rand");
    // .then((res) => {
    //   return res.json();
    // });
    // setObj(data);
    // console.log(data);
    // return data;
    const mydata = await data.json();
    setObj(mydata);
    return mydata;
    
  }
  return (
    <div>
      <button onClick={() => handleclick()}>clickme</button>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </div>
  );
}
