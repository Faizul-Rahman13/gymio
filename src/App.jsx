import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Classes from './Components/Classes'
import Blog from './Components/Blog'
import Topmenu from './Components/Topmenu'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  
  return(

    <>

<BrowserRouter>

< ScrollToTop/>
  <Topmenu/>

   <Routes>


    <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About />} />
  <Route path='/classes' element={<Classes />} />
  <Route path='/blog' element={<Blog />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/signup' element={<Signup />} />

   </Routes>



</BrowserRouter>
   </>

   )

}

export default App
