import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Context/CartContext/CartProvider'
import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer titulo={"Nuestros Productos"} />} />
            <Route path='/detail/:id' element={<ItemDetailContainer  />} />
          </Routes>
          <Footer />  
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
