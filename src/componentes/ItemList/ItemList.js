import Items from "../Items/Items" 

const ItemList =({items})=>{
    return(
        <div>
             <h1>Artículos Disponibles</h1>

             {items.map (item => (

                <Items key={item.id} item= {item}/>

                
            ))}
   
                
            </div>
    )      
       
}

export default ItemList