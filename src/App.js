
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'  
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import ItemsDetailContainer from './componentes/ItemsDetailContainer/ItemsDetailContainer';
import Login from './componentes/Login/Login';
import { AuthProvider } from './context/AuthContext';
import MercadoLibre from'./componentes/MercadoLibre/MercadoLibre.js'
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';



function App() { 

 
  
  return (
    <div className="App">

      <CartProvider>
   
       <AuthProvider>

      <BrowserRouter>

      <Navbar/>
        
        <Routes>
          <Route path='/'element= {<ItemsListContainer greeting="¡Bienvenido Matador/a!"/>}/>
          <Route path='/category/:categoryId' element={<ItemsListContainer/>}/>
          <Route path='/detail/:itemId'element={<ItemsDetailContainer/>}/>
          <Route path = '/mercadolibre'element = {<MercadoLibre/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/cart' element={<Cart/>}/>
          <Route path= '/checkout' element={<Checkout/>}/>
        </Routes>

        
      </BrowserRouter> 

      </AuthProvider>
      
      </CartProvider>

        
    </div>

  );
}

export default App;
