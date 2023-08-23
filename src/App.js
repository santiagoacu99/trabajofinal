import { Routes , Route,  } from 'react-router-dom';
import './css/App.css';
import Navegador from './components/Navegador';
import Ingresar from './components/Ingrear';
import Home from './components/home';
import Placas from './components/placas';
import Monitores1 from './components/Monitores';
import Footer from './components/footer';
import Notebooks1 from './components/Notebooks';
function App() {
  return (
    <div className="App">
      <Navegador />
      <Routes>
         <Route index='home' element ={ <Home />}></Route>
         <Route path='home' element ={ <Home />}></Route>
         <Route path='/Ingresar' element = { <Ingresar />}></Route> 
         <Route path='/placas' element ={ <Placas />}></Route>
         <Route path='/Monitores' element = {<Monitores1 />}></Route>
         <Route path='/Notebooks' element = {<Notebooks1 />}></Route>
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
