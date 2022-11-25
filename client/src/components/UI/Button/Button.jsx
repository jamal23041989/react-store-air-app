import styles from './Button.module.css'

export const Button = ({
  containerClassName = '',
  className = '',
  onClick = () => null,
  children = '',
  isBackButton = false,
}) => {
  return (
    <div className={containerClassName} onClick={onClick}>
      <span className={`${isBackButton ? styles.backButton : styles.button} ${className}`}>{children}</span>
    </div>
  )
}
