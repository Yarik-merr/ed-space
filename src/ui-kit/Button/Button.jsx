import clsx from 'clsx'
import { Text } from '../Text/Text'
import styles from './styles.module.scss'

export const Button = ({ className }) => {
  return (
    <button className={clsx(styles.btn, className)}>
      <Text>ПОПРОБОВАТЬ БЕСПЛАТНО</Text>
    </button>
  )
}
