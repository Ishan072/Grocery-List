import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Item from "./Item";
import { ToastContainer,toast } from "react-toastify";


function App() {

  const defaultList = JSON.parse(localStorage.getItem('list')) || [];
  const [items,setItems] = useState(defaultList);
  const setLocalStorage = (items) => {
    localStorage.setItem('list',JSON.stringify(items));
  }

  const addItem = (ItemName) => {
    const newItem = {
      name: ItemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items,newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item Added Successfully");
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item Removed Successfully");
  }

  const editItem = (itemId) => {
    const newItems = items.map((item)=>{
    if(item.id === itemId)
    {
      const newItem = {...item,completed:!item.completed};
      return newItem;
    }
    return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Item items={items} removeItem={removeItem} editItem={editItem}/>
      <ToastContainer position="top-center" />
    </section>
  );
}

export default App;
