import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atom";
const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = (id, newItem) => {
    // const newList = replaceItemAtIndex(todoList, index, {
    //   ...item,
    //   isComplete: !item.isComplete,
    // });

    const newList = todoList.map((item) => {
      if (item.id === id) {
        return newItem;
      } else {
        return item;
      }
    });

    setTodoList(newList);
  };

  const deleteItem = (id) => {
    // const newList = removeItemAtIndex(todoList, index);
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        // onChange={toggleItemCompletion}
        onChange={() =>
          toggleItemCompletion(item.id, {
            ...item,
            isComplete: !item.isComplete,
          })
        }
      />
      <button onClick={() => deleteItem(item.id)}>X</button>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// function removeItemAtIndex(arr, index) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

export default TodoItem;
