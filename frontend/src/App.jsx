import React from 'react'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import ChatPage from './pages/chatPage'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chatPage" element={<ChatPage />} />

    </Routes>
  )
}

export default App
