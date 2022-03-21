import { IDividerProps } from '../../types'
import styles from './Divider.module.scss'

export const Divider = ({ className }: IDividerProps) => (
  <hr className={`${styles.divider} ${className}`} />
)
