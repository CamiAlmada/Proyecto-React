 import Items from "../Items/Items"


 const ItemList =({ items })=>{
    return(
        
        <div>
           {
            items.map(item=>

            <Items key={item.id} item={item}/>

            )
           }


           </div>
           
     )      
       
 }

 export default ItemList