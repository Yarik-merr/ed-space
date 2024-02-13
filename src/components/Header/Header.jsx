import { Button } from '../../ui-kit/Button/Button'
import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.Header}>
      <img src="images/EdSpace_black.svg" alt="" />
      <nav className={styles.Header__nav}>
        <Button>
          <Text size="t1-400">Возможности</Text>
        </Button>
        <Button>
          <Text size="t1-400">Стоимость</Text>
        </Button>
        <Button>
          <Text size="t1-400">Контакты</Text>
        </Button>
      </nav>
      <Button className={styles.Header__btn}>
        <Text size="t1-500">RU</Text>
        <img src="images/arrow.svg" alt="" />
      </Button>
    </div>
  )
}
