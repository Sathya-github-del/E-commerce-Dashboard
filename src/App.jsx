import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Orders from './components/Orders'
import Customers from './components/Customers'
import Analytics from './components/Analytics'
import Settings from './components/Settings'
import NewProduct from './components/NewProduct'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Sidebar isOpen={sidebarOpen} />
        <main className="main-content">
          <TopBar
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/orders/*" element={<Orders />} />
            <Route path="/customers/*" element={<Customers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/products/new" element={<NewProduct />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
