import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import Login from './pages/login'
import Counter from './pages/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter/>
  </StrictMode>,
)
