import styles from './Capabilities.module.scss'

export const Capabilities = (props) => {
  const { children, imgSrc } = props
  return (
    <div className={styles.Wrapper}>
      <div>{children}</div>
      <img src={`${imgSrc}`} alt="" />
    </div>
  )
}
