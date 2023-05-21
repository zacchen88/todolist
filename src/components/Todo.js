import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
    //console.log(todo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input value={todo} onChange={handleChange} type="text"></input>
        <br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todo;
