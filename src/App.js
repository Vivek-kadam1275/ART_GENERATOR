import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Instructions from './pages/Instructions';
import Gallery from './pages/Gallery';
import { Toaster } from 'react-hot-toast';
function App() {
  
  return (
     <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Main/>}/>
        <Route path='/instructions' element={<Instructions/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
     </div>
  );
}

export default App;
