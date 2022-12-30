import './Navbar.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'





const Navbar = ()=>{

  const {getCantidad}=useContext(CartContext)
  const totalCantidad= getCantidad()

    return (
        <nav>
           <div>
             <h1 className="title">La Tienda Virtual</h1>
          </div>

          <div className='navbar'>

            <Link to='/category/camisetas' > 
               <Button   >Camisetas</Button>
            </Link>
            <Link to='/category/buzos'>
              <Button >Buzos</Button>
             </Link>
            <Link to='/category/camperas'> 
              <Button >Camperas</Button>
            </Link>
            <Link to='/category/musculosas'> 
              <Button  >Musculosas</Button> 
            </Link>  

           <Link to='/'> 
             <Button >Volver al Inicio</Button>   
           </Link>  

           <Link to='/mercadolibre'> 
             <Button  >Mercado Libre</Button> 
           </Link>  

           <div className='title'>
            Carrito:{totalCantidad}
            <img style={{width : "30px"}} src='/images/carrito.png' alt='Carrito'/>
           </div>

           <Link to='/Login'>
            Iniciar Sesión
           </Link>



        </div>   
         
        
        </nav>
    )

}

export default Navbar

