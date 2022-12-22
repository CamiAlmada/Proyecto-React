
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'  
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';
import ItemsDetailContainer from './componentes/ItemsDetailContainer/ItemsDetailContainer';
import MercadoLibre from './componentes/MercadoLibre/MercadoLibre';





function App() {


  return (
    <div className="App">

    


      <BrowserRouter>

      <Navbar/>


        <Routes>
          <Route path='/'element= {<ItemsListContainer greeting="¡Bienvenido Matador/a!"/>}/>
          <Route path='/category/:categoryId' element={<ItemsListContainer/>}/>
          <Route path='/detail/:itemId'element={<ItemsDetailContainer/>}/>
        </Routes>
      </BrowserRouter> 

      
      

      <MercadoLibre/>
      
    </div>

  


  );
}

export default App;
