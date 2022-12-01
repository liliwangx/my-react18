import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: ["aaa", "bbb", "ccc"],
    text: "",
  };
  render() {
    return (
      <div>
        <h2>todo</h2>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
        />
        <button
          className="add"
          onClick={() => {
            if (this.state.list.includes(this.state.text)) {
              return;
            }
            this.setState({
              list: [...this.state.list, this.state.text],
            });
          }}
        >
          add
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item}>
              {item}
              <button
                className="delete"
                onClick={() => {
                  let newList = [...this.state.list];
                  newList.splice(index, 1);
                  this.setState({
                    list: newList,
                  });
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
