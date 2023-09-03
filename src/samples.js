import React from "react";
import { Component, useState } from "react";
import "./App.css";

class animal extends Component {
  state = {
    Counter: 0,
    animo: "Cat",
  };
  increament = () => {
    this.setState({ Counter: this.state.Counter + 1 });
  };
  decreament = () => {
    this.setState({ Counter: this.state.Counter - 1 });
    if (this.state.Counter <= 0) {
      {
        this.setState({ Counter: this.state.Counter });
      }
    }
  };
  change = () => {
    let cat = "Cat";
    let dog = "Dog";
    let animo = this.state.animo === "Cat" ? "Dog" : "Cat";
    this.setState({ animo });
  };

  render() {
    const [style, setStyle] = useState("cont");
    const addStyle = () => {
      console.log("you clicked");
      setStyle("cont1");
    };
    const Counter = this.state.Counter;
    const animo = this.state.animo;

    return (
      <div>
        <button onClick={this.decreament}>Reduce</button>
        <p>{Counter}</p>
        <button onClick={this.increament}>Add</button>
        <p>{animo}</p>
        <button onClick={this.change}>change</button>
        <button onClick={addStyle}>Add Styling</button>
      </div>
    );
  }
}
export default animal;




import React, { useState } from "react";
function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  setInterval(() => setCurrentDateTime(new Date()), 1000);
  return (
    <div>
      <p>{currentDateTime.toString()}</p>
    </div>
  );
}
export default Clock;




import React, { useState } from "react";

function Person() {
  const [new_item, setNew_item] = useState("");
  const [add, setAdd] = useState([]);
  function add_item() {
    const Add_new = {
      value: new_item,
    };
    setAdd((oldList) => [...oldList, Add_new]);

    setNew_item("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="add item"
        value={new_item}
        onChange={(event) => setNew_item(event.target.value)}
      />
      <button onClick={() => add_item()}>Add</button>
      <p>below is a list of items:</p>
      <ul>
        {add.map((Add_new) => (
          <li>{Add_new.value}</li>
        ))}
      </ul>
    </>
  );
}
export default Person;



import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Todo() {
  const [new_item, setNew_item] = useState("");
  const [add, setAdd] = useState([]);

  function Add_new() {
    const item = {
      id: uuid(),
      value: new_item,
    };
    setAdd((oldList) => [...oldList, item]);
    setNew_item("");
  }
  return (
    <>
      <h1>My Todo List</h1>
      <input
        type="text"
        placeholder="add new item"
        value={new_item}
        onChange={(event) => setNew_item(event.target.value)}
      />
      <button onClick={() => Add_new()}>Add</button>
      <ul>
        {add.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}
export default Todo;



// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };
  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: "Welcome to the world of events",
    });
  };
  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    this.setState({ message: "mouse is moving" });
  };
  // to get value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  };

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    });
  };
  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    this.setState({ message: "Input field has been blurred" });
  };
  // This event triggers during a text copy
  handleCopy = (e) => {
    this.setState({
      message: "Using 30 Days Of React for commercial purpose is not allowed",
    });
  };
  render() {
    return (
      <>
        <textarea>Please write your comment ...</textarea>

        <select name="country">
          <option value="">Select your country</option>
          <option value="finland">Finland</option>
          <option value="sweden">Sweden</option>
          <option value="denmark">Denmark</option>
          <option value="norway">Norway</option>
          <option value="iceland">Iceland</option>
        </select>
      </>
    );
  }
}
export default App;
