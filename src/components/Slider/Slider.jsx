import { Carousel, Image } from 'react-bootstrap/'
import slider from '../../assets/data/slider.json'
import styles from './styles.module.scss'
import { Button } from '../../ui-kit/Button/Button'

import { Text } from '../../ui-kit/Text/Text'

export function Slider({ send, open }) {
  const handleClick = () => {
    if (open) {
      open(true)
    }
  }

  return (
    <div>
      <Carousel>
        {slider.map((item, i) => (
          <Carousel.Item key={i} className={styles.slider}>
            <Image src={item.img} className={styles.slider__img} />
            <Carousel.Caption className={styles.slider__text}>
              <Text size="t6">{item.title}</Text>
              <Text size="t2g">{item.text}</Text>
              <Button
                ButtonGreen
                disabled={send}
                className={styles.slider__btn}
                onClick={handleClick}
              >
                ПОПРОБОВАТЬ БЕСПЛАТНО
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
