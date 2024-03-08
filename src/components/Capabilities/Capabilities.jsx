import styles from './styles.module.scss'

export const Capabilities = ({ children }) => {
  return (
    <div className={styles.Wrapper}>
      {children}
      <img src="/images/accept.svg" alt="" />
    </div>
  )
}
