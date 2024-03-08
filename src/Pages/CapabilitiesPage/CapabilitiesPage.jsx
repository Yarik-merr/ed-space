import { Cards } from '../../components/Cards/Cards'
import { Button } from '../../ui-kit/Button/Button'
import { Text } from '../../ui-kit/Text/Text'

import styles from './styles.module.scss'

export function CapabilitiesPage({ send, open }) {
  const handleClick = () => {
    if (open) {
      open(true)
    }
  }

  return (
    <section className={styles.capabilitiesPage} id="Capabilities">
      <div className={styles.capabilitiesPage__title}>
        <Text size="t5b">Возможности Ed Space</Text>
        <Text size="t2g">
          Поможем перенести корпоративную академию, базу знаний, учебные курсы,
          настроим систему мотивации обучения, круглосуточная поддержка.
        </Text>
      </div>
      <Cards />
      <Button onClick={handleClick} disabled={send} ButtonGreen>
        <Text size="t0b">ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
      </Button>
    </section>
  )
}
