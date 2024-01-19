import React from "react";

export default function ButtonClick({cls,buttonName,click}) {


    const currentClass = "btn "+cls
  return (
    <div className="button"  style={{cursor:"pointer"}}  onClick={click}>
      <div className={currentClass}>{buttonName}</div>
    </div>
  );
}