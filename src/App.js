import Form from "./Components/Form";
import Header from "./Components/Header";
import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="  flex justify-center mt-20 ">
      <div className="w-[300px] bg-gray-700 h-[400px] rounded-lg shadow-xl">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
