
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'  
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';

import ItemCount from './componentes/ItemCount/ItemCount';
import ItemsDetailContainer from './componentes/ItemsDetailContainer/ItemsDetailContainer';
import MercadoLibre from './componentes/MercadoLibre/MercadoLibre';





function App() {

 



  const handleOnAdd=(cantidad)=>{
    console.log("Se agrego al carrito correctamente " + cantidad);

  }
  return (
    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route path='/'element= {<ItemsListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemsListContainer/>}/>
        <Route path='/detail/:productId'element={<ItemsDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

      <Navbar/>

      <ItemsListContainer greeting="¡Bienvenido Matador/a!"/>


      <ItemsDetailContainer/>

      
      <ItemCount initial={0} stock = {50} onAdd = {handleOnAdd} />

      <MercadoLibre/>
      
    </div>

  


  );
}

export default App;
