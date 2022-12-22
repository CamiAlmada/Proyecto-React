import ItemCount from "../ItemCount/ItemCount"
import CartWidget from "../CartWidget/CartWidget"


const ItemsDetail =({id, name, imagen, description, price, stock })=>{
   
   
   
    const handleOnAdd=(cantidad)=>{
        console.log("Se agrego al carrito correctamente " + cantidad);
      
      }


       return(
        <div key={id}>
                 <h1>{name}</h1>
                 <img style={{width:"350px"}} src= {imagen} alt={name} /> 
                 <p>{description}</p>
                <h2>{price}</h2>

              <CartWidget/>

           {stock >0 ? <ItemCount initial={0} stock = {50} onAdd = {handleOnAdd} /> : <h3>SIN STOCK</h3>  }   

                </div>
    )
}

export default ItemsDetail