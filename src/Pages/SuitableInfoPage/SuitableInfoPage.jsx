import { SuitableInfo } from '../../components/SuitableInfo/SuitableInfo'
import { Button } from '../../ui-kit/Button/Button'
import { Text } from '../../ui-kit/Text/Text'

import styles from './styles.module.scss'

export function SuitableInfoPage({ send, open }) {
  const handleClick = () => {
    if (open) {
      open(true)
    }
  }

  return (
    <section className={styles.suitableInfoPage}>
      <div className={styles.suitableInfoPage__content}>
        <Text size="t5w">Точно подойдет для: </Text>
        <SuitableInfo />
      </div>
      <Button disabled={send} onClick={handleClick} ButtonGreen>
        <Text size="t0b">ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
      </Button>
    </section>
  )
}
