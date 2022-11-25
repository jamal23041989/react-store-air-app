import styles from './ContentWrapper.module.css'

export const ContentWrapper = ({ children, className = '' }) => {
  return <div className={`${styles.contentWrapper} ${className}`}>{children}</div>
}
