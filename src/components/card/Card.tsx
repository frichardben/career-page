import Image from 'next/image'
import { Typography } from '../typography/Typography'
import styles from './Card.module.scss'

export interface ICardProps {
  imageUrl: string
  alt: string
  title: string
  description: string
}

export const Card = ({ imageUrl, alt, title, description }: ICardProps) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={imageUrl}
        height={'180px'}
        width={'100%'}
        alt={alt}
        objectFit={'cover'}
      />
      <div className={styles.body}>
        <Typography className={styles.title} variant="h5">
          {title}
        </Typography>
        <Typography className={styles.description} variant="p">
          {description}
        </Typography>
      </div>
    </div>
  )
}
