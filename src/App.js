import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/cart';
import  {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      
    </div>
  );
}

export default App;
