import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"


const items =[{
    id:"1",
    name: "Camisetas",
    description: "Camiseta Talleres Givova Titular 2022",
    stock: "50",
  },
  
  {
    id:"2",
    name: "Buzos",
    description: "Buzo Givova Talleres Canguro Frisa",
    stock: "50",
  },
  
  {
    id:"3",
    name: "Camperas",
    description: "Campera Givova Talleres Inout Rustico",
    stock: "50",
  },
  
  {
    id:"4",
    name: "Musculosas",
    description: "Musculosa Talleres Givova Entrenamiento",
    stock: "50",
  }]
  


const getItems = ()=>{
    return new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(items)
      }, 2000)
    })
  }


const ItemsListContainer =({greeting})=>{
    const [items, setItems]= useState([])

  
  
  useEffect (()=>{
    getItems().then(response =>{
      setItems(response)
    })
    .catch(error=>{
      console.log("Error");
    }) 
  }, [])


    return (
        
        <div>
            <h1 style= {{color: "blue"}} >{greeting}</h1>
            <ItemList items={items} />

           
        </div>
       
    )
}

export default ItemsListContainer 