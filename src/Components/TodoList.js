import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdOutlineDoneAll } from "react-icons/md";

const TodoList = ({ todo, setTodo, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };

  const handleComplete = (todos) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todos) => todos.id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todo.map((todos) => {
        return (
          <div key={todos.id} className=" ">
            <div className="bg-white w-[250px] ml-5 p-1 px-2 rounded mt-5 flex items-center justify-between">
              <div
                className={`font-bold text-gray-700 ${
                  todos.completed ? "text-gray-400" : ""
                }`}
              >
                {todos.title}
              </div>
              <div className="flex gap-3 text-orange-500 z-[2]">
                <div onClick={() => handleEdit(todos)}>
                  <AiFillEdit className=" " />
                </div>
                <div onClick={() => handleComplete(todos)}>
                  <MdOutlineDoneAll />
                </div>
                <div
                  className="hover:text-orange-400"
                  onClick={() => handleDelete(todos)}
                >
                  <MdCancel />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
