import { useState, useEffect } from "react"
import ItemsDetail from "../ItemsDetail/ItemsDetail"
import {getItemsById} from '../../asynMosk'
import {useParams} from 'react-router-dom'



const ItemsDetailContainer =()=>{
    const [item, setItem]= useState({})

    const {productId}=useParams()

  
  
  useEffect (()=>{
    getItemsById(productId).then(response =>{
      setItem(response)
    })
    .catch(error=>{
      console.log(error);
    }) 
  }, [productId])

  return(
    <div>
        <h1>Detalle del Artículo</h1>
        <div>
            <h1>{item.name}</h1>
            <img style={{width:"350px"}} src= {item.imagen} alt={item.name} /> 
            <p>{item.description}</p>
            <h2>{item.price}</h2>
        </div>

        <ItemsDetail/>
    </div>
  )


   
}

export default ItemsDetailContainer