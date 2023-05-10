import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddProduct from './screens/AddProduct/AddProduct'
import Home from './screens/Home/Home'
import ProductList from './screens/ProductList/ProductList'
import Login from './screens/Auth/Login'
import Signuppage from './screens/Auth/SignUp'

const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/add' element={<AddProduct />}/>
          <Route path='/product' element={<ProductList />}/>
          <Route path='/signup' element={<Signuppage/>}/>
     
      </Routes>
    )
  }
  
  export default AllRoutes