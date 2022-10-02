import React, { useState, useEffect } from "react";

function Todo(props) {
    console.log("props",props)
  return (
    <div>
      <ul>
        {props.data?.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;

export async function getServerSideProps(context) {
    console.log("ctx", context)
    let data = [];
    const result = await fetch("https://jsonplaceholder.typicode.com/todos")
    data = await result.json();

    return {
        props: {
            data
        }
    }
}