import { useState } from 'react'
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import Vendors from './components/Vendors';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Testform from './components/Testform';
import Homepage from './components/Homepage';
import Singlepage from './components/Singlepage';
import Quickviewpage from './components/Quickviewpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
   return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' index element={<Home/>}/> 
      <Route path='/Shop' element={<Shop/>}/> 
      <Route path='/Vendors' element={<Vendors/>}/> 
      <Route path='/Blog' element={<Blog/>}/> 
      <Route path='/Contact' element={<Contact/>}/> 
      <Route path='/View' element={<Homepage/>}/> 
      <Route path='/singlecard/:id' element={<Singlepage/>}/> 
      <Route path='/Quickview' element={<Home/>}/>
      <Route path='/singleproduct/:id' element={<Quickviewpage/>}/> 
      </Route>
    </Routes>
    </BrowserRouter> 
   )
   
}

export default App
