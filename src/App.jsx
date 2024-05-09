import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Calculator from './pages/Calculator.jsx'

const App = () => {
  const sBody = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  }

  return (
    <html>
      <head>
        <title>Test sheet</title>
        <link rel='stylesheet' href='main.css' />
      </head>
      <body style={sBody}>
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
