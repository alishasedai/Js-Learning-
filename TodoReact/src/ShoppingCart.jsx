import React, { use, useEffect, useState } from 'react'

const ShoppingCart = () => {
    const [item,setItem] =useState("");
    const [price,setPrice]=useState("");
     const [items,setItems] = useState( () => {
       const data = JSON.parse(localStorage.getItem("cart"|| "[]"));
      return Array.isArray(data) ? data : []
     }
     );
  const addItem =(e) => {
    e.preventDefault();

    setItems((prev) => {
        const existing = prev.find((i) => i.name === item);
        if(existing){
            return prev.map((i) => {
                return i.name === item ? {...i,qty : i.qty +1 } : i
            })
        }

       return [...prev, {name : item, qty :1,price : Number(price)}]
    })
    setItem("");
    setPrice("");
  }
    const removeItem =(data) => {
        console.log(data)
        const remove = items.filter((_,i) => {
            return i !== data;
        })
        setItems(remove)

    }
    const totalItems = items.reduce((sum,i) => sum + i.qty,0)

    const increaseQty =(index) => {
        setItems((prev) => {
        return prev.map((item,i) => {
                return index === i 
                ? {...item,qty : item.qty + 1} 
                : item;
            })
        })
    }
    const decreaseQty =(index) => {
        setItems((prev) => {
          return prev.map((item,i) => {
            return i === index ?
             {...item,qty : item.qty - 1} 
             : item
          })
        })
    }
    const totalPrice = items.reduce((sum,item) => {
      return sum + item.qty * item.price
    },0)
    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(items));
    },[items])
  
  return (
    <div>
      <form action="" onSubmit={addItem}>
        <input type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)} name="" id="" />
        <input type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
        <button type='submit'>Add Item</button>
      </form>
      {items && <ul>{items.map((val,i) => {
        return <li key={i}>{val.name} : {val.qty} Rs. {val.price}
        <button onClick={() => removeItem(i)}>❌</button>
        <button onClick={() => increaseQty(i)}>Increase Qty</button> 
        <button onClick={() => decreaseQty(i)}>Decrease Qty</button>
        </li>
      })}</ul>}

      {totalItems > 0 && <h2>Total Items : {totalItems}</h2>}
       {totalPrice >0  && <h2>Total Price : {totalPrice}</h2>}
    </div>
  )
}

export default ShoppingCart
