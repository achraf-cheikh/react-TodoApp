import React, { Component } from "react";

export default class Todocard extends Component {
  state = {
    setinput: "",
  };

  handleChange = (e) => {
    this.setState({ setinput: e.target.value });
  };

  handleSubmitt = (e) => {
    e.preventDefault();
    this.state.setinput.trim() === ""
      ? alert("Add text to the input")
      : this.props.add(this.state.setinput);
    this.setState({ setinput: "" });
  };

  render() {
    return (
      <div
        style={{
          marginLeft: "400px",
          textAlign: "center",
          paddingTop: "10px",
          height: "600px",
          width: "500px",
          backgroundColor: "black",
          borderRadius: "10px",
          marginBottom: "-320px",
        }}
      >
        <h1 style={{ color: "white" }}>TODO APP</h1>
        <form action="">
          <input
            style={{
              width: "300px",
              height: "25px",
              borderRadius: "5px",
              border: " solid",
              borderColor: "#238093",
              color: "white",
              backgroundColor: "black",
            }}
            type="text"
            value={this.state.setinput}
            onChange={this.handleChange}
          />
          <button
            style={{
              height: "36px",
              backgroundColor: "#238093",
              borderRadius: "5px",
              width: "45px",
              marginLeft: "-4px",
              borderColor: "#238093",
              fontWeight: "bold",
            }}
            onClick={this.handleSubmitt}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
