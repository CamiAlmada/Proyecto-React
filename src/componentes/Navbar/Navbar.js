import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = (props)=>{
    return (
        <nav>
          <h1 className="title">La Tienda Virtual</h1>
         <Button  colorText= 'blue'>Camisetas</Button>
         <Button  colorText= 'black'>Buzos</Button>
         <Button  colorText= 'blue'>Camperas</Button>
         <Button  colorText= 'black'>Musculosas</Button>

         <CartWidget/>
         
        </nav>
    )

}

export default Navbar

