import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import ProductCategoryPage from "./components/ProductCategoryPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<><Hero/>
        <Product/></>}/>
        <Route path="/products/:category" element={<ProductCategoryPage/>}/>
    
    </Routes>
    </Router>
  )
}

export default App
