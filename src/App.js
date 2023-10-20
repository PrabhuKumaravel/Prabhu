import React, { useState } from 'react'
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css'; 
import Content from './Content';
import MyModal from './MyModal';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")))

  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1 ; 
    const addNewItem = {id, checked:false, item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  
  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem)return;
    setNewItem('')
    addItem(newItem)
  }

  
  return (
    <div className="App">
      <Header/>
      <Content
        items = {items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <MyModal
        handleSubmit = {handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
    </div>
  );
}

export default App;
