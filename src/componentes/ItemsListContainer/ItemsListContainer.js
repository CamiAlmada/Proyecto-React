import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {getItems} from '../../asynMosk'



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