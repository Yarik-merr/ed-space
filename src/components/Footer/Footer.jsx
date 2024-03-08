import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from '../../ui-kit/Button/Button'
import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

export function Footer() {
  const menuItems = [
    ['Capabilities', 'Возможности'],
    ['Price', 'Стоимость'],
    ['Home', 'Выбор Ed Space'],
  ]

  const docsItems = ['Пользовательское соглашение', 'Публичная оферта']

  const contacts = [
    ['mailto:jaroslavtereshko@rambler.ru', 'jaroslavtereshko@rambler.ru'],
    ['tel:+79517414868', '+7 (951) 741-48-68'],
    ['tel:79535216167', '+7 (953) 521-61-67'],
  ]

  return (
    <div className={styles.wrapper} id="Contacts">
      <div className={styles.wrapper__footer}>
        <img
          src="/images/EdSpace_black.svg"
          alt=""
          style={{ width: '100px' }}
        />
        <div className={styles.wrapper__footer__content}>
          <div className={styles.wrapper__footer__content__menu}>
            <Text size="t3b">Меню:</Text>
            <div className={styles.wrapper__footer__content_text}>
              {menuItems.map((item, index) => (
                <AnchorLink href={`#${item[0]}`}>
                  <Button>
                    <Text key={index} size="t1-500">
                      {item[1]}
                    </Text>
                  </Button>
                </AnchorLink>
              ))}
            </div>
          </div>
          <div className={styles.wrapper__footer__content__docs}>
            <Text size="t3b">Документы:</Text>
            <div className={styles.wrapper__footer__content_text}>
              {docsItems.map((item, index) => (
                <Text key={index} size="t1-500">
                  {item}
                </Text>
              ))}
            </div>
          </div>
          <div className={styles.wrapper__footer__content__contacts}>
            <Text size="t3b">Контакты:</Text>
            <div className={styles.wrapper__footer__content_text}>
              {contacts.map((item, index) => (
                <Button>
                  <a href={`${item[0]}`}>
                    <Text key={index} size="t1-500">
                      {item[1]}
                    </Text>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.wrapper__subFooter}>
        <Text size="t0g">2022 Ed Space. Все права защищены</Text>
        <div>
          <a
            href="https://vk.com/jaroslav0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/vk.svg" alt="" />
          </a>
          <a
            href="https://t.me/yarikmrkrv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/tg.svg" alt="" />
          </a>
        </div>
      </footer>
    </div>
  )
}
