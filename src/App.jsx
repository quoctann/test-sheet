import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  return (
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
        <script src='/dist/server.bundle.js' />
      </body>
    </html>
  )
}

export default App
