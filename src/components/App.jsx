import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [arrayOfItems, setArrayofItems] = useState([]);
  

  function newInput(event) {
    const itemvalue = event.target.value;
    setItem(itemvalue);
  }
  function addItem() {
    setArrayofItems(prevItems => {
      return [...prevItems, item];
    });
  }

  function deleteItem(id){
    
    setArrayofItems(prevItems=>{
     return  prevItems.filter((ele,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newInput} value={item} type="text" />
        <button onClick={addItem} >
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrayOfItems.map((ele,index) => (
            <ToDoItem key={index} id={index} text={ele} whenClicked={deleteItem}/>

          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
