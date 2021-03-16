import styles from './alert.module.css'
import cn from '/root/.cache/typescript/4.1/node_modules/@types/classnames'

export default function Alert({ children, type }: any) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
