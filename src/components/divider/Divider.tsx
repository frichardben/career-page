import styles from './Divider.module.scss'

export interface IDividerProps {
  className?: string
}

export const Divider = ({ className }: IDividerProps) => (
  <hr className={`${styles.divider} ${className}`} />
)
