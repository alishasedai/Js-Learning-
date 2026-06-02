import React, { useEffect, useState } from 'react'

const ShoppingCart = () => {
    const [product,setProduct] = useState("");
    const [cart,setCart] =useState([]);
    const hanldeAdd = () => {
        const existing = cart.find(item => item.name === product);
        if(existing){
           setCart((prev) => {
        return    prev.map((item) => {
          return    item.name === product ? {...item,qty : item.qty +1} : item
            })
           });
           setProduct("")
        }

           else{
                setCart((prev) => [
            ...prev, {
                id : Date.now(),
                name : product,
                qty : 1
            }
        ])
            setProduct("");
           }
    
        console.log("Button clicked");
    }
    useEffect(() => {
        console.log(cart)
    },[cart])
  return (
    <div>
     
        <input type="text"
      placeholder='Enter the items'
      value={product}
      onChange={(e) => setProduct(e.target.value)} />
      <button onClick={hanldeAdd}>Add</button>
      <ul>
{cart.map((val,index) => {
            return <h2 key={val.id}>{val.name}</h2>
        })}
      </ul>
        
        

    </div>
  )
}

export default ShoppingCart
