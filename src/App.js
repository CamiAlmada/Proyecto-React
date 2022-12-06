
import './App.css';
import Navbar from './componentes/Navbar/Navbar'  
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';

import ItemCount from './componentes/ItemCount/ItemCount';





function App() {

 



  const handleOnAdd=(cantidad)=>{
    console.log("Se agrego al carrito correctamente " + cantidad);

  }
  return (
    <div className="App">

      <Navbar/>

      <ItemsListContainer greeting="¡Bienvenido Matador/a!"/>

      <ItemCount initial={0} stock = {50} onAdd = {handleOnAdd} />
      
    </div>

  


  );
}

export default App;
