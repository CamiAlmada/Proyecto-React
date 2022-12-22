 
 import './itemsListContainer.css'
 import { useState, useEffect } from "react"
 import ItemList from "../ItemList/ItemList"
 import {getItems, getItemsByCategory} from '../../asynMosk'
 import{useParams} from 'react-router-dom'


 const ItemsListContainer =({greeting})=>{

   const [items, setItems]= useState([])


  const {categoryId}=useParams()
  
  
  useEffect (()=>{


    if(categoryId) {
      getItemsByCategory(categoryId)
      .then(response=>{
        setItems(response)
      })

      .catch(error=>{
        console.log(error)
      })

    } else{

      getItems()
      .then(response=>{
        setItems(response)
      })

      .catch(error=>{
        console.log(error)
      })
    }


  },[categoryId])


   return (
        
       <div>
             <h1 style= {{color: "blue"}} >{greeting}</h1> 
         

           <h1 className="list">Adquirí toda la indumentaria matadora aquí</h1>
           <ItemList items={items}/>
           
           
       </div> 
       
    )
}

 export default ItemsListContainer 