import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { MainLayout } from './layout/MainLayout.jsx'
import { AdminLayout } from './layout/AdminLayout.jsx'
import { Login } from './components/Login/Login.jsx'

import './App.css'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida.jsx'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<ItemListContainer titulo={"Nuestros Productos"} />} />
              <Route path='/categoria/:categoria' element={<ItemListContainer titulo={"Nuestros Productos"} />} />

              {/* <Route path='/detail/:id' element={<ItemDetailContainer  />} /> */}
              <Route path='/detail/:${id}' element={<ItemDetailContainer  />} />
              <Route path='/carrito' element={<Cart />} />
            </Route>

            <Route path ="/admin" element={<AdminLayout />}> 
              <Route index element={<Login />} />

              <Route 
                path="alta-productos" 
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                } 
                />


            </Route>

            {/* <Route path ="/admin" element={<ProductFormContainer />} />  */}

          </Routes>
          <Footer />  
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
