import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Card } from './comp/my.jsx'
import { Navbar} from './comp/second.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <Card />
      <Navbar />
    </>
  </React.StrictMode>
)
