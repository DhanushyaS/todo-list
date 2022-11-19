import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddTodo from './screens/AddTodo/AddTodo'
import Home from './screens/Home/Home'
import TodoList from './screens/TodoList/TodoList'



const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddTodo />}/>
          <Route path='/todo' element={<TodoList />}/>
     
      </Routes>
    )
  }
  
  export default AllRoutes