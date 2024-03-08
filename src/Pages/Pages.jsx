import React, { useState } from 'react'
import { Modal } from '../components/Modal/Modal'
import { Header } from '../components/Header/Header'
import { Slider } from '../components/Slider/Slider'
import { Footer } from '../components/Footer/Footer'
import { SuitableInfoPage } from './SuitableInfoPage/SuitableInfoPage'
import { CapabilitiesPage } from './CapabilitiesPage/CapabilitiesPage'
import { PricePage } from './PricePage/PricePage'

export const Pages = () => {
  const [openModal, setOpenModal] = useState(false)
  const [dataSend, setDataSend] = useState(false)

  return (
    <div>
      <Header />
      <Slider send={dataSend} open={setOpenModal} />
      <SuitableInfoPage send={dataSend} open={setOpenModal} />
      <CapabilitiesPage send={dataSend} open={setOpenModal} />
      <PricePage send={dataSend} open={setOpenModal} />
      <Footer />
      {openModal && (
        <Modal setOpenModal={setOpenModal} setDataSend={setDataSend} />
      )}
    </div>
  )
}
