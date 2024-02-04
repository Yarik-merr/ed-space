import data from '../../assets/data/text.json'
import styles from './styles.module.scss'

export const Card = () => {
  return data.map((item, i) => (
    <div className={styles.card} key={i}>
      <img src={item.images} alt="" />
      <h1 className={styles.card__title}>{item.title}</h1>
      <p className={styles.card__content}>{item.content}</p>
    </div>
  ))
}
