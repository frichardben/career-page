import { IJobsProps } from '../../types'
import styles from './Jobs.module.scss'

export const Jobs = ({ title, link, location = 'Remoto' }: IJobsProps) => {
  return (
    <a href={link} className={styles.jobs} target="_blank" rel="noreferrer">
      {title}
      <span>{location}</span>
    </a>
  )
}
