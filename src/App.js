import React from "react";
import "./App.css";
import Input from "./Components/Input";
import TodoItem from "./Components/TodoItem";

const todoList = [{
    name: 'todo',
    done: false,
    id: 121212121212123434
},
{
  name: 'todo2',
  done: true,
  id: 1212121254451212123434
},
{
  name: 'todo3',
  done: true,
  id: 12121223121212123434
}
]
function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((item,idx)=>(
            <TodoItem name={item.name} done= {item.done} id={item.id} key={item.id} />
          ))}
          <Input />

        </div>
      </div>
    </div>
  );
}

export default App;
