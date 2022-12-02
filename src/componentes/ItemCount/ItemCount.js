
import { useState } from "react"


const ItemCount =({initial, stock, onAdd})=>{

    const [count, setCount]= useState(initial)


    const increment =()=>{
        if (count<stock){
            setCount(count + 1)
        }     

    }

    const decrement =()=>{
        if (count>0){
            setCount(count- 1)

        }
        
    }


  const reset =()=>{
        setCount(initial)
    }


    return(
        <div>

            
            <h3>{count}</h3>

        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()} >-</button>
        <button onClick={()=>onAdd(count)}>Añadir al Carrito</button>
        <button onClick={()=>reset()}>Borrar</button>

        </div>
        
    )
}

export default ItemCount