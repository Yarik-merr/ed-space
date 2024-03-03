import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <div className={styles.Wrap}>
      <div className={styles.Footer}>
        <img
          src="/images/EdSpace_black.svg"
          alt=""
          style={{ width: '100px' }}
        />
        <div className={styles.Footer__content}>
          <div className={styles.Footer__content__menu}>
            <Text size="t3b">Меню:</Text>
            <div className={styles.Footer__content__menu_sub}>
              <Text size="t1-500">Возможности</Text>
              <Text size="t1-500">Стоимость</Text>
              <Text size="t1-500">Выбор Ed Space</Text>
            </div>
          </div>
          <div className={styles.Footer__content__docs}>
            <Text size="t3b">Документы:</Text>
            <div className={styles.Footer__content__menu_sub}>
              <Text size="t1-500">Пользовательское соглашение</Text>
              <Text size="t1-500">Публичная оферта</Text>
            </div>
          </div>
          <div className={styles.Footer__content__contacts}>
            <Text size="t3b">Контакты:</Text>
            <div className={styles.Footer__content__menu_sub}>
              <Text size="t1-500">admin@site.com</Text>
              <Text size="t1-500">+7 (900) 123-45-67</Text>
              <Text size="t1-500">+7 (999) 876-54-32</Text>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.SubFooter}>
        <Text size="t0g">2022 Ed Space. Все права защищены</Text>
        <div>
          <img src="/images/vk.svg" alt="" />
          <img src="/images/tg.svg" alt="" />
        </div>
      </footer>
    </div>
  )
}
