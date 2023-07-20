import React from 'react'
import Navbar from './components/Navbar';
import Product from './Pages/Product';
import style from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleItemPage from './Pages/SingleItemPage';
import AddItem from './Pages/AddItem';

const App = () => {
  return (
    <div className={style.mainDiv}>
      <BrowserRouter>
        <Navbar />
        <div className={style.subMainDiv}>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/item/:id' element={<SingleItemPage />} />
            <Route path='/addItem' element={<AddItem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App