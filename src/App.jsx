import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tablet from './pages/Tablet'
import Smartphone from './pages/Smartphone'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/contact'

export default function App() {
  return (
    // <> </> React fragment
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/tablet" element={<Tablet />} />
      <Route path="/product/smartphone" element={<Smartphone />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}
