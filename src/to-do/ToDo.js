import React, { useState } from "react";
import Swal from "sweetalert2";

const ToDo = () => {
  const [text, setText] = useState("");
  const [todo, setToDo] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if (text) {
      const newText = { text, id: new Date().getTime().toString() };
      setToDo([...todo, newText]);
      setText("");
    } else {
      Swal.fire("Enter A Todo Text!");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const removeText = (id) => {
    let newText = todo.filter((message) => message.id !== id);
    setToDo(newText);
  };

  const editText = (id) => {
    if (text === "") {
      let newText = todo.filter((message) => {
        if (message.id === id) {
          setText(message.text);
        }

        return message.id !== id;
      });
      setToDo(newText);
    }
  };

  return (
    <React.Fragment>
      <article className="form">
        <h3> To Do App</h3>
        <label htmlFor="text">My Text:</label>
        <textarea
          // className="textbox"
          // id="text"
          value={text}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>
          Add
        </button>
      </article>
      <article>
        {todo.map((message) => {
          const { id, text } = message;
          return (
            <div key={id} className="item">
              <h4>{text}</h4>
              <button className="btn" onClick={() => removeText(id)}>
                Remove
              </button>
              <button className="btn" onClick={() => editText(id)}>
                Edit
              </button>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ToDo;
