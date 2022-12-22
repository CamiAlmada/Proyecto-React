import './Navbar.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'





const Navbar = ()=>{
    return (
        <nav>
           <div>
             <h1 className="title">La Tienda Virtual</h1>
          </div>

          <div >

            <Link to='/category/camisetas' > 
               <Button  colorText= 'blue'  className='button'>Camisetas</Button>
            </Link>
            <Link to='/category/buzos'>
              <Button  colorText= 'black'>Buzos</Button>
             </Link>
            <Link to='/category/camperas'> 
              <Button  colorText= 'blue'>Camperas</Button>
            </Link>
            <Link to='/category/musculosas'> 
              <Button  colorText= 'black'>Musculosas</Button> 
            </Link>  

           <Link to='/'> 
             <Button  colorText= 'blue'>Volver al Inicio</Button> 
           </Link>   

        </div>   
         
        
        </nav>
    )

}

export default Navbar

