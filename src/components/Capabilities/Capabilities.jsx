import styles from './styles.module.scss'

export const Capabilities = ({ children, imgSrc }) => {
  return (
    <div className={styles.Wrapper}>
      {children}
      <img src={imgSrc} alt="" />
    </div>
  )
}
