import './App.css';
import ProductList from './Components/ProductList/ProductList';
import {Routes,Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from 'axios'
import Details from './Components/Details/Details';
function App() {
  const [products, setProducts] = useState([])
  const getAllProducts=async()=>{
    try {
      const response=await axios.get('http://localhost:5000/products/')
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList products={products} getAllProducts={getAllProducts} />}/>
     <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
