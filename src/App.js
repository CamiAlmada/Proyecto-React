import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar'  
import ItemsListContainer from './componentes/ItemsListContainer/ItemsListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <ItemsListContainer greeting="¡Bienvenido Matador/a!"/>
      
    </div>
  );
}

export default App;
