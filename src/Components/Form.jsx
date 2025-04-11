import { useState } from "react";
import styles from "./form.module.css"
export default function Form({ todos, setTodos }) {
    // const [todo,setTodo]= useState("");
    const [todo,setTodo]= useState({name: "", done: false});
  
    function handleSubmit(e){
        e.preventDefault();
        // to add items to the list(todos) and retain previous items 
        setTodos([...todos,todo]); 
        // to clear up input feild
        setTodo({name: "", done: false})
       }    

    return (
     <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <input 
         className={styles.modernInput}
         onChange={(e)=>setTodo({name:e.target.value, done: false})}
         value={todo.name} 
         type="text" 
         placeholder="Enter Todo Item ..."
         />
        <button className={styles.modernButton}  type="submit">Add</button>
        </div>   
     </form> 
    );
}