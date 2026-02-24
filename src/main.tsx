import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (window.Telegram?.WebApp?.initData && window.Telegram.WebApp.initData.length > 0) {
  window.Telegram.WebApp.expand()
  window.Telegram.WebApp.disableVerticalSwipes()
  document.documentElement.classList.add('tg-webapp')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
