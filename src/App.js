import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Products from "./pages/products/Products"
import ShopDetails from "./pages/shopDetails/ShopDetails"
import Checkout from "./pages/checkout/Checkout"
import Cart from "./pages/cart/Cart"
import BlogOne from "./pages/blogOne/BlogOne";
import BlogTwo from "./pages/blogTwo/BlogTwo";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/Services";
import SingleSer from "./pages/singleSer/SingleSer";
import Contact from "./pages/contact/Contact";
import { useState } from "react";

function App() {
  let [rightt, setRight] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/'>
          <Route index element={<Home rightt={rightt} setRight={setRight}/>} />
              <Route path='products' element={<Products rightt={rightt} setRight={setRight}/>}/>
              <Route path='shopDetails' element={<ShopDetails rightt={rightt} setRight={setRight}/>}/>
              <Route path='checkout' element={<Checkout rightt={rightt} setRight={setRight}/>}/>
              <Route path='cart' element={<Cart rightt={rightt} setRight={setRight}/>}/>

              <Route path='blogOne' element={<BlogOne rightt={rightt} setRight={setRight}/>}/>
              <Route path='blogTwo' element={<BlogTwo rightt={rightt} setRight={setRight}/>}/>
              <Route path='blogDetails' element={<BlogDetails rightt={rightt} setRight={setRight}/>}/>

              <Route path='gallery' element={<Gallery rightt={rightt} setRight={setRight}/>}/>
              <Route path='services' element={<Services rightt={rightt} setRight={setRight}/>}/>
              <Route path='servicesDetails' element={<SingleSer rightt={rightt} setRight={setRight}/>}/>

              <Route path='contact' element={<Contact rightt={rightt} setRight={setRight}/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;