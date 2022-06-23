import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todos) =>
      todos.id === id ? { title, id, completed } : todos
    );

    setTodo(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form
        onSubmit={onFormSubmit}
        className="flex justify-center items-center mt-5"
      >
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="p-1 px-2 rounded outline-none bg-grat-100 font-semibold"
          value={input}
          required
          onChange={inputChange}
        />
        <button
          type="submit"
          className="bg-orange-400 font-semibold ml-5 p-1 rounded "
        >
          {editTodo ? "OK" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
