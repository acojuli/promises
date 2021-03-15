  
import Item from "../Item/Item";

function ItemList (props) {

  return (
    <div className='item-list'>
      {
        props.items.map(
          item => <Item key={item.id} item={item} /> 
        )
      }
    </div>
  )
};

export default ItemList;