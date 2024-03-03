import React, { useState } from 'react'
import { Cards } from './components/Cards/Cards'
import { Text } from './ui-kit/Text/Text'
import { Button } from './ui-kit/Button/Button'
import { Modal } from './components/Modal/Modal'
import { Header } from './components/Header/Header'
import { Slider } from './components/Slider/Slider'
import { SuitableInfo } from './components/SuitableInfo/SuitableInfo'
import { Footer } from './components/Footer/Footer'
import { Capabilities } from './components/Capabilities/Capabilities'
import { Route, Routes } from 'react-router'
import { CardsPage } from './components/CardsPage/CardsPage'
import { Page } from './Page/Page'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [visitedCard, setVisitedCard] = useState(true)

  const handleLinkClick = () => {
    setVisitedCard(false)
  }

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
