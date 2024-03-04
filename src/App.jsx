import React from 'react'
import { Route, Routes } from 'react-router'

import { CardsPage } from './components/CardsPage/CardsPage'
import { Page } from './Page/Page'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/card/:id" element={<CardsPage />} />
      </Routes>
    </div>
  )
}

export default App
