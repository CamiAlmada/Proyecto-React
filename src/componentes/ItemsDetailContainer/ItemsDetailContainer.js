import { useState, useEffect } from "react"
import { getItemsById } from "../../asynMosk"
import ItemsDetail from "../ItemsDetail/ItemsDetail"
import {useParams} from 'react-router-dom'




const ItemsDetailContainer =()=>{
    const [item, setItem]= useState({})

    const [isLoading, setIsLoading]= useState(true)

   const {itemId}=useParams()

    useEffect(()=>{
      getItemsById(itemId)
      .then(response=>{
        setItem(response)

      })

    .catch(error=>{
      console.log(error)
    })

    .finally(()=>{
      setIsLoading(false)
    })
    }, [itemId])


    if(isLoading){
      return <h1>Cargando...</h1>    }


  return(
    <div>
        <h1>Detalle del Artículo</h1>

        <div>
          <ItemsDetail {...item}/>
              
        </div>

    </div>
  )


   
}

export default ItemsDetailContainer