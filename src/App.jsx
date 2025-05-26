import AllProductsPreview from "./components/AllProductsPreview";
import CheckoutPage from "./components/CheckoutPage";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import ProductCategoryPage from "./components/ProductCategoryPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage";


function App() {
  

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<><Hero/>
        <Product/>
        </>}/>
        <Route path="/ourproducts" element ={<AllProductsPreview/>}/>
        <Route path="/products/:category" element={<ProductCategoryPage/>}/>
        <Route path="/checkoutpage" element={<CheckoutPage/>}/>
    <Route path="/search" element={<SearchResultsPage/>}/>
    </Routes>
    </Router>
  )
}

export default App
