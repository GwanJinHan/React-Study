import React, { useRef, useState, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "첫 번째 할 일",
      checked: false,
    },
    {
      id: 2,
      text: "두 번째 할 일",
      checked: false,
    },
    {
      id: 3,
      text: "세 번째 할 일",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => [...todos, todo]);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const [theme, setTheme] = useState("default");

  const onClick = useCallback((theme) => {
    setTheme(theme);
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        theme={theme}
      />
      <TodoFooter onClick={onClick} />
    </TodoTemplate>
  );
};

export default App;
