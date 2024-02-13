import clsx from 'clsx'
import '../../global-styles/_fonts.scss'

export const Text = ({ size, className, children }) => {
  return (
    <div className={clsx('text', `text-${size}`, className)}>{children}</div>
  )
}
