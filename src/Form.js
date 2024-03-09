import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({addItem}) => {

    const [newItemName,setNewItemName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItemName)
        {
            toast.error("Please Enter a Value");
            return
        }
    
        addItem(newItemName);
        setNewItemName('');

    }

    return(
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className="form-control">
                <input type="text" value={newItemName} placeholder="Enter Item" className="form-input"
                onChange={(ev)=>{setNewItemName(ev.target.value)}}></input>
                <button type="Submit" className="btn">Add Item</button>
            </div>
        </form>
    );
}

export default Form;