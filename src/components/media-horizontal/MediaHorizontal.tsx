import Image from 'next/image'
import { Typography } from '../typography/Typography'
import styles from './MediaHorizontal.module.scss'

export interface IMediaHorizontalProps {
  imgUrl: string
  alt: string
  title: string
  subtitle: string
  description: string
}

export const MediaHorizontal = ({
  imgUrl,
  alt,
  title,
  subtitle,
  description
}: IMediaHorizontalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaImage}>
        <Image src={imgUrl} alt={alt} height="300" width="500" />
      </div>
      <div className={styles.mediaImage}>
        <Typography className={styles.mediaTitle} variant="h4">
          {title}
        </Typography>
        <Typography className={styles.mediaSubTitle} variant="h5">
          {subtitle}
        </Typography>
        <Typography className={styles.mediaDescription} variant="p">
          {description}
        </Typography>
      </div>
    </div>
  )
}
