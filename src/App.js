
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}