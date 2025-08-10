
import React from 'react'
import {Route,Routes} from "react-router-dom"

import Home from "./Home/Home"

import Layout from "./Layout"
import AddURL from './AddUrl/AddUrl'
function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>

          <Route path='' element={<Home/>}/>
          <Route path='add' element={<AddURL/>}/>

        </Route>
     </Routes>
    </>
  )
}

export default App
