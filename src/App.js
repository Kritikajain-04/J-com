import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
 import Category from './Pages/Category'
 import FilterProduct from './Pages/FilterProduct'
 import Footer from './Pages/Footer'
// import '../ontact.css'

export default function App() {
  return (
    <>
    <BrowserRouter>
   
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Products' element={<Products/>}/>
      {/* <Route path='/ontact' element={<ontact/>}/> */}
       <Route path='/Category' element={<Category/>}/>
      <Route path='/cat-Products/:catname' element={<FilterProduct/>}/> 


    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
