import styles from "./todoitem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
     function handleDelete(item){
          console.log("delete btn clkd for item", item);
          setTodos(todos.filter((todo) => todo!== item));
     }
     function handleClick(name){
         const newArray = todos.map((todo) => 
               todo.name === name ? {...todo, done: !todo.done} : todo
              )
              setTodos(newArray)
              
     }
     const className = item.done ? styles.completed : ""
     return ( 
          <div className={styles.item}>
               <div className={styles.itemName}>
               <span className={className} onClick={() => handleClick(item.name)}>
               {item.name} 
               </span>
               <span>
                    <button  onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
               </span></div>
              
               {/* to separate the items */}
               <hr className={styles.line}></hr> 
          </div>
     )  
} 