import { Carousel, Image } from 'react-bootstrap/'
import slider from '../../assets/data/slider.json'
import styles from './styles.module.scss'
import { Button } from '../../ui-kit/Button/Button'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'

export function Slider() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <Carousel>
        {slider.map((item, i) => (
          <Carousel.Item key={i} className={styles.Slider}>
            <Image src={item.img} className={styles.Slider__img} />
            <Carousel.Caption className={styles.Slider__text}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
            <Button ButtonGreen className={styles.Slider__btn} onClick={setOpenModal}>
              ПОПРОБОВАТЬ БЕСПЛАТНО
            </Button>
          </Carousel.Item>
        ))}
      </Carousel>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  )
}