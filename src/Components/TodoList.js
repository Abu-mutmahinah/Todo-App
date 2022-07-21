import { FiTrash } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";

const TodoList = ({ todos, setTodos, setEdit }) => {
  // FUNCTION FOR DELETING ITEMS FROM THE AN ARRAY OF OBJECT
  const handleDelete = ({ id }) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //FUCTION FOR EDITING ITEM IN AN ARRAY OF OBJECT
  const handleEditing = ({ id }) => {
    const findTodo = todos.find((item) => item.id === id);
    setEdit(findTodo);
  };
  return (
    <div>
      {todos.map((items) => {
        return (
          <div
            className="flex flex-col justify-center items-center"
            key={items.id}
          >
            <div className="w-[430px] text-xl border-2 border-gray-200 rounded mt-5 px-2 py-1 text-gray-200 font-bold flex justify-between items-center">
              <h1 className="w-[330px]">{items.title}</h1>
              <div className="flex gap-5">
                <BiEdit
                  className="hover:text-gray-500 cursor-pointer "
                  onClick={() => handleEditing(items)}
                />
                <FiTrash
                  className="hover:text-gray-500 cursor-pointer "
                  onClick={() => handleDelete(items)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
