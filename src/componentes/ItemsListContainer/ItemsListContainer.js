 
 import './itemsListContainer.css'
 import { useState, useEffect } from "react"
 import ItemList from "../ItemList/ItemList"
 import{useParams} from 'react-router-dom'
 import { getDocs,collection,query,where,orderBy } from 'firebase/firestore'
 import { db } from '../../service/firebase/firebaseConfig'


 const ItemsListContainer =({greeting})=>{

   const [items, setItems]= useState([])


  const {categoryId}=useParams()
  
  

  useEffect (()=>{


    const collectionRef = categoryId 
        ? query(collection(db, 'items'), where('category', '==', categoryId))
        : query(collection(db, 'items'), orderBy('name'))

      getDocs(collectionRef)
        .then(response => {
          const itemsAdapted = response.docs.map(doc => {
            const data = doc.data()

            return { id: doc.id, ...data}
          })

          setItems(itemsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        

  },[categoryId])


   return (
        
       <div>
             <h1 className='title' style= {{color: "blue"}} >{greeting}</h1> 
         

           <h1 className="list">Adquirí toda la indumentaria matadora aquí</h1>
           <ItemList items={items}/>
           
           
       </div> 
       
    )
}

 export default ItemsListContainer 