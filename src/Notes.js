import React from "react";

const Notes = ({ item, removeTodo, modifTodo }) => {
  return (
    <div>
      {item.map((note) => {
        const { id, desc, userInput } = note;

        return (
          <div className="result" key={id}>
            <h4>{userInput}</h4>
            <p>{desc}</p>
            <button onClick={() => modifTodo(id)} className="btn">
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button onClick={() => removeTodo(id)} className="btn">
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
