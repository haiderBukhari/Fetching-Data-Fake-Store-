import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Cart } from './Container/Cart';
function App() {
  let [data, setdata] = useState([]);
  let [product, setproduct] = useState([]);
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setdata(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className='all-data'>{
      data.map((arr)=>(
      <>
        <Cart product={[arr.id, arr.image, arr.title, arr.description, arr.price, arr.rating.rate]}/>
      </>
      ))
    }
    </main>);
}
export default App;
