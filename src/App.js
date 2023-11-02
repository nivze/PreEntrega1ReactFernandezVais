import './App.css';
import { BrowserRouter, Navigate , Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/itemlistcontainer';

//importo los componentes creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './components/navbar';


function App() {
  return (
    <div className="App">
      {/* prop Greeting */}
      <ItemListContainer greeting= {"productos no disponibles"} />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample /> }>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='contact' element={ <Contact /> } />
          
          {/* Redireccion a Home */}
          <Route path='*' element={ <Navigate replace to="/"/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
