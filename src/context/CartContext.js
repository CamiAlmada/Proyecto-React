 import { useState, createContext } from "react"
 
export const CartContext =  createContext({cart:[]})

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

    const clearCart = () => {
      setCart([])
    }



    const getCantidad =()=>{
      let totalCantidad=0

      cart.forEach(product=>{
        totalCantidad += product.cantidad
      })

      return totalCantidad

    }

    const getTotal = () => {
      let acc = 0

      cart.forEach(product => {
        acc += product.cantidad * product.price
      })

      return acc
    }


    return(

        <CartContext.Provider value= {{cart, addItem , removeItem, getCantidad, getTotal, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}
