import React, { Component } from "react";
import "./App.css";
import Todocard from "./components/Todocard";
import Todolist from "./components/Todolist";

export default class App extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        title: "learn HTML && CSS",
        isdone: true,
      },
      {
        id: Math.random(),
        title: "learn JavaScript",
        isdone: true,
      },
      {
        id: Math.random(),
        title: " learn React JS",
        isdone: true,
      },
    ],
  };

  handleAdd = (newval) => {
    const newToDo = { id: Math.random(), title: newval, isdone: false };
    this.setState({ tasks: [...this.state.tasks, newToDo] });
  };

  handledelete = (id) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== id) });
  };

  handlecomplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === id ? { ...el, isdone: !el.isdone } : el
      ),
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#238093",
          width: "100%",
          height: "1000px",
          paddingTop: " 10px",
        }}
        className="App"
      >
        <Todocard add={this.handleAdd} />
        <Todolist
          tab={this.state.tasks}
          del={this.handledelete}
          comp={this.handlecomplete}
        />
      </div>
    );
  }
}
