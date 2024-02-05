import clsx from 'clsx'
import { Text } from '../Text/Text'
import styles from './styles.module.scss'

export const Button = ({ className, children, onClick }) => {
  return (
    <button className={clsx(styles.btn, className)} onClick={onClick}>
      <Text>{children}</Text>
    </button>
  )
}
