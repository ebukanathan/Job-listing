import React from "react";
import "./Tab.scss";

function Tab({ position, handleDelete }) {
  return (
    <div className="tab">
      <div className="main__tab">{position}</div>
      <button onClick={() => handleDelete(position)} className="delete">
        X
      </button>
    </div>
  );
}

export default Tab;
