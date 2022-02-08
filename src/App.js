import Notes from "./Notes";
import TodoList from "./Todo-list";
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  const storage = localStorage.getItem("tache");
  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
};

function App() {
  const [userInput, setUserInput] = useState("");
  const [desc, setDesc] = useState("");
  const [item, setItem] = useState(getLocalStorage());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tache", JSON.stringify(item));
  }, [item]);

  const modifTodo = (id) => {
    const newTodo = item.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setUserInput(newTodo.userInput);
    setIsEditItem(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) {
      alert("veuillez ajouter une tâche");
    } else if (userInput && !toggleSubmit) {
      setItem(
        item.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...item, id: elem.id, desc: desc, userInput: userInput };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setUserInput("");
      setDesc("");
      setIsEditItem(null);
    } else {
      if (userInput || desc) {
        const newInput = {
          id: new Date().getTime().toString(),
          userInput,
          desc,
        };

        setItem([...item, newInput]);
      }
    }

    console.log(item);
  };

  const removeTodo = (id) => {
    const removeArr = [...item].filter((userInput) => userInput.id !== id);
    setItem(removeArr);
  };

  const del = () => {
    setItem([]);
  };

  return (
    <>
      <div>
        <h1>Todo List React</h1>
      </div>
      <TodoList
        handleSubmit={handleSubmit}
        desc={desc}
        userInput={userInput}
        setDesc={setDesc}
        setUserInput={setUserInput}
        toggleSubmit={toggleSubmit}
      />
      <Notes item={item} removeTodo={removeTodo} modifTodo={modifTodo} />
      <button className="btn-result" onClick={() => del([])}>
        Tout delete
      </button>
    </>
  );
}

export default App;
