import data from '../../assets/data/card.json'
import { Text } from '../../ui-kit/Text/Text'
import styles from './styles.module.scss'

export const Card = () => {
  return data.map((item, i) => (
    <div className={styles.card} key={i}>
      <img src={item.images} alt="" className={styles.card__img} />

      <Text size="t3b">{item.title} </Text>
      <Text size="t0b ">{item.content}</Text>
    </div>
  ))
}
