import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

const IMG_ARR = [
  {
    img: '/images/InfoCard.svg',
    title: 'Организации онлайн-курсов',
    subtitle:
      'Cоздайте свою программу обучения с нуля, самостоятельно управляйте учебным процессом в несколько кликов, круглосуточная поддержка.',
  },
  {
    img: '/images/TradeCard.svg',
    title: 'Создания корпоративного обучения',
    subtitle:
      'Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.',
  },
]

export function SuitableInfo() {
  return (
    <div className={styles.suitableInfo}>
      {IMG_ARR.map((item, i) => (
        <div key={i} className={styles.suitableInfo__card}>
          <img src={item.img} alt="" />
          <div className={styles.suitableInfo__card__content}>
            <Text size="t3w">{item.title}</Text>
            <Text size="t0w">{item.subtitle}</Text>
          </div>
        </div>
      ))}
    </div>
  )
}
