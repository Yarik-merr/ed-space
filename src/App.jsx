import React, { useState, useEffect } from 'react'
import { Card } from './components/Card/Card'
import { Text } from './ui-kit/Text/Text'
import { Button } from './ui-kit/Button/Button'
import { Modal } from './components/Modal/Modal'
import { Header } from './components/Header/Header'
import data from '../src/assets/data/slider.json'
import { indexOfMax } from './utils/IndexOfMax'
import { createAndAppendElement } from './utils/CreateAndAppendElement'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlerSlide = ({ direction }) => {
    if (direction === 'left') {
      setCurrentIndex((prewIndex) =>
        prewIndex ? prewIndex - 1 : (prewIndex = indexOfMax(data))
      )
    } else if (direction === 'right') {
      setCurrentIndex((prewIndex) =>
        prewIndex === indexOfMax(data) ? (prewIndex = 0) : prewIndex + 1
      )
    }
  }

  useEffect(() => {
    const sectionBody = document.querySelector('.section-1')

    const removeElement = (element) => {
      sectionBody.removeChild(element)
    }

    const { title, text, img } = data[currentIndex]

    const titleElement = createAndAppendElement(
      'div',
      'section-1__title',
      sectionBody,
      title
    )
    const subTitleElement = createAndAppendElement(
      'div',
      'section-1__subtitle',
      sectionBody,
      text
    )
    const imagesElement = createAndAppendElement(
      'img',
      'section-1__images',
      sectionBody
    )

    imagesElement.src = img

    return () => {
      removeElement(titleElement)
      removeElement(subTitleElement)
      removeElement(imagesElement)
    }
  }, [currentIndex])

  return (
    <div>
      <Header />
      <div className="section-1">
        <img
          src="images/arrow.svg"
          alt=""
          className="section-1-l"
          onClick={() => handlerSlide({ direction: 'left' })}
        />
        <img
          src="images/arrow.svg"
          alt=""
          className="section-1-r"
          onClick={() => handlerSlide({ direction: 'right' })}
        />
        <Button className="section-1__btn" onClick={setOpenModal} ButtonGreen>
          <Text size="t0b">ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
        </Button>
      </div>

      <div className="section-3">
        <Text size="t5b" className="section-3__title">
          Возможности Ed Space
        </Text>
        <Text size="t2g" className="section-3__subtitle">
          Поможем перенести корпоративную академию, базу знаний, учебные курсы,
          настроим систему мотивации обучения, круглосуточная поддержка.
        </Text>
        <div className="section-3__card">
          <Card />
        </div>
        <Button className="section-3__btn" onClick={setOpenModal} ButtonGreen>
          <Text size="t0b">ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
        </Button>
      </div>

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default App
