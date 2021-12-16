import React from "react";

class TodoClass extends React.Component {
  state = {
    items: [
      { id: "1", text: "Learn JavaScript", done: false },
      { id: "2", text: "Learn React", done: false },
      { id: "3", text: "Learn hooks", done: true },
      { id: "4", text: "Build something awesome", done: true }
    ]
  };

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
          {this.state.items.map(item => (
            <li key={item.id}>
              <label>
                <input type="checkbox" disabled readOnly checked={item.done} />
                <span className={item.done ? "done" : ""}>{item.text}</span>
              </label>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoClass;
