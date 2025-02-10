import React from 'react'

import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Event from './pages/Events/Event.jsx'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/event'} element={<Event />} />
    </Routes>
  )
}

export default App;
