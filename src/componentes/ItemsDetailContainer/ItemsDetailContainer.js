import { useState, useEffect } from "react"
import ItemsDetail from "../ItemsDetail/ItemsDetail"
import {useParams} from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"


const ItemsDetailContainer =()=>{
    const [item, setItem]= useState({})

    const [isLoading, setIsLoading]= useState(true)

   const {itemId}=useParams()

    useEffect(()=>{

      const docRef=  doc(db, 'items',itemId)

      getDoc  ( docRef ).then(doc=>{

        const data =doc.data()
       
        const itemsAdapted={id:doc.id, ...data, itemId}
        

        setItem(itemsAdapted)

        })

        .catch(error=>{
          console.log(error);
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