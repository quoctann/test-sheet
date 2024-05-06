import express from 'express'
import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './src/App.jsx'

const app = express()
const port = process.env.PORT || 3000

app.get('*', async (req, res) => {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  res.send('<!DOCTYPE html>' + html)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
