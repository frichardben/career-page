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
    <article className={styles.container}>
      <div>
        <Image src={imgUrl} alt={alt} height={'400px'} width={'400px'} />
      </div>
      <div>
        <Typography className={styles.mediaTitle} variant="h3">
          {title}
        </Typography>
        <Typography className={styles.mediaSubTitle} variant="h4">
          {subtitle}
        </Typography>
        <Typography className={styles.mediaDescription} variant="p">
          {description}
        </Typography>
      </div>
    </article>
  )
}
