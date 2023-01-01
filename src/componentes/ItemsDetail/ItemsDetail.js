import ItemCount from "../ItemCount/ItemCount"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"



const ItemsDetail =({name, id, stock, description, price, imagen})=>{

   const {addItem} = useContext(CartContext)


  const [cantidadToAdd, setCantidadOnAdd] = useState(0)
  console.log(cantidadToAdd);

   
   
    const handleOnAdd=(cantidad)=>{
        console.log("Se agrego al carrito correctamente " + cantidad);
        setCantidadOnAdd(cantidad)
      

         addItem({id,name, price, cantidad})
      }



    

       return(
        <div key={id}>
                 <h1>{name}</h1>
                 <img style={{width:"350px"}} src= {imagen} alt={name} /> 
                 <p>{description}</p>
                <h2>${price}</h2>

              <CartWidget/>

           {stock >0 ? <ItemCount  initial={0} stock = {50} onAdd = {handleOnAdd} /> 
           : <h3>SIN STOCK</h3>  }  
                 

                </div>
    )
}

export default ItemsDetail