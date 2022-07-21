import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ todos, setTodos, edit, setEdit, input, setInput }) => {
  // FUNCTION FOR UPDATING TODO TASK
  const updateTodo = (title, id, complete) => {
    const newTodo = todos.map((item) =>
      item.id === id ? { title, id, complete } : item
    );
    setTodos(newTodo);
    setEdit("");
  };

  //
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  // FUCTION FOR SUBMITION
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { title: input, complete: false, id: uuidv4() }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.complete);
    }
  };
  // FUNTION FOR WHEN A VALUE CHANGES IN AN INPUT
  const inputOnChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div className=" flex flex-col items-center  justify-center">
        <h3 className="text-white font-semibold text-xl mt-5">Add New To-Do</h3>

        <form className="items-center " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter new task"
            className="mt-5 py-2 px-3 w-[350px] outline-none rounded font-semibold"
            value={input}
            required
            onChange={inputOnChange}
          />
          <button className="py-2 px-3  border-2 border-gray-300 ml-5 rounded text-white font-semibold">
            {edit ? "Ok" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
