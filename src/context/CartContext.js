 import { useState, createContext } from "react"
 
export const CartContext =  createContext()

export const CartProvider =({children})=>{

    const [cart, setCart ]= useState ([])
    
    console.log(cart);
   
    const addItem=(productToAdd)=>{
      if (!isInCart (productToAdd.id) ){
        setCart([...cart,productToAdd ])
      }
    }
  
    const isInCart =(id)=>{
     return cart.some(product=>product.id===id)
    }
  
    const removeItem = (id)=>{
      const updateCart = cart.filter(product=>product.id!==id)
      setCart(updateCart)
    }



    const getCantidad =()=>{
      let totalCantidad=0

      cart.forEach(product=>{
        totalCantidad += product.cantidad
      })

      return totalCantidad

    }


    return(

        <CartContext.Provider value= {{cart, addItem , removeItem, getCantidad}}>
            {children}
        </CartContext.Provider>
    )

}