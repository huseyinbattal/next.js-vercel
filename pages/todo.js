import React, { useState, useEffect } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log("list", todoList);
  }, [todoList]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setTodoList(json);
      });
  }, []);

  return (
    <div>
      <ul>
        {todoList.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
