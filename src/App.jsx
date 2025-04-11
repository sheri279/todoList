import { useState } from 'react'
import Todo from './Components/Todo';
import TodoItem from './Components/TodoItem';
import Header from './Components/Header';
import "./App.css"

function App() {


  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  ); 
}

export default App
