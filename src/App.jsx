import React, { useState } from 'react'
import { Card } from './components/Card/Card'
import { Layout } from './components/Layout/Layout'
import { Text } from './ui-kit/Text/Text'
import { Button } from './ui-kit/Button/Button'
import { Modal } from './components/Modal/Modal'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <Layout title="Привет" className="section-1">
        <Text className="section-1__title">Возможности Ed Space</Text>
        <Text size="t1" className="section-1__subTitle">
          Поможем перенести корпоративную академию, базу знаний, учебные курсы,
          настроим систему мотивации обучения, круглосуточная поддержка.
        </Text>
        <div className="section-1__card">
          <Card />
        </div>
        <Button className="section-1_btn" onClick={setOpenModal}>
          ПОПРОБОВАТЬ БЕСПЛАТНО
        </Button>
      </Layout>

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default App
