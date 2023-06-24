import React from "react";

function ToDoItem(props){
   
    return (
      
        <li onClick={()=>{
           
            props.whenClicked(props.id);
        }} 
        // style={{textDecoration:clicked?"line-through":"none"}} 
        >{props.text}</li>
        
    
      
    );
}

export default ToDoItem;