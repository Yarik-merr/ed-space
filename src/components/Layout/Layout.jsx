import clsx from 'clsx'
import styles from './styles.module.scss'

export const Layout = ({ children, className }) => {
  return <div className={clsx(styles.Layout, className)}>{children}</div>
}
