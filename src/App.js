import './App.css';
import logopropio from './imagen/logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
        <img src={logopropio} className='logo' />
      </div>
      <div className='tarea-litsa-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas></ListaDeTareas>    
      </div>
      
    </div>
  );
}

export default App;
