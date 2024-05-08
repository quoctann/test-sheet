import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Calculator from './pages/Calculator.jsx'

const App = () => {
  return (
    <html>
      <head>
        <title>Test sheet</title>
      </head>
      <body>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route element={<NotFound />} />
        </Routes>
      </body>
    </html>
  )
}

export default App
