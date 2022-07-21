import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

function App() {
  //INITIAL STATE FOR TODO
  const [todos, setTodos] = useState([]);

  //INITIAL STATE FOR INPUT
  const [input, setInput] = useState("");

  // INITIAL STATE FOR EDITING
  const [edit, setEdit] = useState(null);
  return (
    <div>
      <Header />
      <Form
        todos={todos}
        setTodos={setTodos}
        edit={edit}
        setEdit={setEdit}
        input={input}
        setInput={setInput}
      />
      <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
    </div>
  );
}

export default App;
