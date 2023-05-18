import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Mockman from 'mockman-js'
import Home from './pages/Home'
const App = () => {
  return (
    <>
  <Routes> 
  <Route path='/' element={<Home/>}/>
  <Route path='/api-test' element={<Mockman/>}/>
  </Routes>
    </>
  )
}

export default App