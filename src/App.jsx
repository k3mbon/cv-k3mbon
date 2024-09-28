import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <>
      <Router>
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
