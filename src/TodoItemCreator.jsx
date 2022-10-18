import { useSetRecoilState } from "recoil";
import { todoListState } from "./atom";
import { useState } from "react";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(
      (oldTodoList) =>
        // oldTodoList는 atom에서 default값
        {
          return [
            ...oldTodoList,
            { id: getId(), text: inputValue, isComplete: false },
          ];
        }

      //   console.log(oldTodoList)
    );
    setInputValue("");
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
