import Image from 'next/image'
import { ICardProps } from '../../types'
import { Typography } from '../typography/Typography'
import styles from './Card.module.scss'

export const Card = ({ imageUrl, alt, title, description }: ICardProps) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={imageUrl}
        height={'140'}
        width={'140'}
        objectFit={'contain'}
        alt={alt}
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
