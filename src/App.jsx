import React from 'react'
import { Route, Routes } from 'react-router'

import { CardsPage } from './Pages/CardsPage/CardsPage'
import { Pages } from './Pages/Pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/card/:id" element={<CardsPage />} />
    </Routes>
  )
}

export default App
