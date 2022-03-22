import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Tabs from './components/tabs/tabs'
import Posts from './components/posts/posts'
import Signup from './components/form/signup'
import Login from './components/form/login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Tabs/>
      <Posts/>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
