import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Admin from './components/admin';
import Homepage from './components/homepage';
import ProductPage from './components/pageProduct';
import EditProduct from './components/editProduct';

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  
useEffect(() => {
  const fn = async () => {
      try {
        const res = await axios.get("http://localhost:8020/")
        setProducts(res.data.products);
        setCategories(res.data.categories)
      } catch (error) {
        console.log(error)
    }
  };

  fn()

}, [])

return (
  <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage products={products} categories={categories} />}></Route>
        <Route path="admin" element={<Admin products={products} categories={categories} />}></Route>
        <Route path="product/:id" element={<ProductPage categories={categories}/>}></Route>
        <Route path="editProduct/:id" element={<EditProduct products={products} categories={categories}/>}></Route>
      </Routes>
    </BrowserRouter>

    
  </>
)

}

export default App
