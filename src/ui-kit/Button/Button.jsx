import clsx from 'clsx'
import { Text } from '../Text/Text'
import styles from './styles.module.scss'

export const Button = ({
  className,
  children,
  onClick,
  ButtonGreen = false,
}) => {
  return (
    <button
      className={clsx(styles.Button, className, {
        [styles['Button--green']]: ButtonGreen,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
