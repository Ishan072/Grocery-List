import Singleton from "./Singleton";

const Item = ({items,removeItem,editItem}) => {
    return (
        <div className="items">
            {items.map((item)=>{
                return <Singleton item={item} key={item.id} removeItem={removeItem} editItem={editItem}/>
            })}
        </div>
    );
}

export default Item;