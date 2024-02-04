import clsx from 'clsx'
import '../../global-styles/_fonts.scss'

export const Text = ({ size, color, className, children }) => {
  return (
    <div
      className={clsx('text', `text-${size}`, className, {
        'text--white': color,
      })}
    >
      {children}
    </div>
  )
}
