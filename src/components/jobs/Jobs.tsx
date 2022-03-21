import Link from 'next/link'
import { IJobsProps } from '../../types'
import styles from './Jobs.module.scss'

export const Jobs = ({ title, link, location = 'Remoto' }: IJobsProps) => {
  return (
    <Link href={link} passHref={true}>
      <button className={styles.jobs}>
        {title}
        <span>{location}</span>
      </button>
    </Link>
  )
}
