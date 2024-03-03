import clsx from 'clsx'
import styles from './styles.module.scss'

export const Button = ({
  className,
  children,
  onClick,
  ButtonGreen = false,
  disabled = false,
}) => {
  return (
    <button
      className={clsx(styles.Button, className, {
        [styles['Button--green']]: ButtonGreen && !disabled,
        [styles['Button--disabled']]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
