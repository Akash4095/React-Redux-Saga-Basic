import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/actions'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const product={
    name:"I Phone",
    type:"mobile",
    price:100000,
    color:"red"

  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))} >Add addTo Cart</button>
    </div>
  );
}

export default App;
