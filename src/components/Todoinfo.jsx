import React from "react";

const Todoinfo = ({ tab, del, comp }) => {
  return (
    <div className="card">
      <h5 className={tab.isdone ? "done" : "uncomplete"}> {tab.title} </h5>
      <button
        className={tab.isdone ? "donee" : "uncompletee"}
        onClick={() => comp(tab.id)}
      >
        {tab.isdone ? "Undo" : "Complete"}
      </button>
      <button className="dell" onClick={() => del(tab.id)}>
        Delete
      </button>
    </div>
  );
};

export default Todoinfo;
