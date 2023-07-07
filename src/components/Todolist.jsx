import React from "react";
import Todoinfo from "./Todoinfo";

const Todolist = ({ tab, del, comp }) => {
  return (
    <div style={{ marginTop: "-450px" }}>
      {tab.map((el) => (
        <Todoinfo key={el.id} tab={el} del={del} comp={comp} />
      ))}
    </div>
  );
};

export default Todolist;
