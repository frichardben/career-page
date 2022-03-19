import Link from 'next/link'
import styles from './Jobs.module.scss'

export interface IJobsProps {
  link: string
  title: string
  location?: string
}

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
