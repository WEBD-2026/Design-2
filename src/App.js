import React from 'react'

import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Event from './pages/Events/Event.jsx'
import Accommodation from './pages/Accomodation/accomodation.jsx'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/event'} element={<Event />} />
      <Route path={'/Accommodation'} element={<Accommodation />} />

    </Routes>
  )
}

export default App;
