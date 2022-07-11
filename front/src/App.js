import './App.css';
import ProductList from './Components/ProductList/ProductList';
import {Routes,Route, Link} from "react-router-dom"
import { useEffect} from 'react';
import Details from './Components/Details/Details';
import { useDispatch } from 'react-redux';
import {getAllProducts} from "./Redux/actions/productActions"
import AddProduct from './Components/addProduct/AddProduct';
import EditProduct from './Components/EditProduct/EditProduct';
function App() {
  const dispatch = useDispatch()

  // const [products, setProducts] = useState([])
  // const getAllProducts=async()=>{
  //   try {
  //     const response=await axios.get('http://localhost:5000/products/')
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div> <Link to="/addproduct"> <button> ADD PRODUCT </button> </Link> <ProductList/> </div>}/>
     <Route path="/details/:id" element={<Details/>}/>
     <Route path="/addproduct" element={<AddProduct/>}/>
     <Route path="/editproduct/:id" element={<EditProduct/>}/>

      </Routes>
    </div>
  );
}

export default App;
