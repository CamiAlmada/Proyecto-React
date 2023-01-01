import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const Cart = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext)

    const total = getTotal()

    return (
        <div className="title ">
            <h1>Su Compra:</h1> 
            {
                cart.map(items => {
                    return (
                        <div key={items.id}>
                            <h1>{items.name}</h1>
                            <img style={{width:'80px'}} src={items.imagen} alt={items.name}/>
                            <h2> ${items.price}</h2>
                            <h2>Cantidad: {items.cantidad}</h2>
                            <h2>Subtotal:$ {items.price * items.cantidad}</h2>
                            <button className="button" onClick={() => removeItem(items.id)}>Eliminar producto</button>
                            <Link className="button" to='/'>Seguir Comprando</Link>
                        </div>

                       
                    )                                       
                                                    
                })
                
            }

<div>

<Link to='/checkout'>Finalizar Compra</Link>

</div>


            <h1>Total: ${total}</h1>
        </div>

    )
}

export default Cart