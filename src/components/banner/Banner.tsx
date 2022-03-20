import Image from 'next/image'
import styles from './Banner.module.scss'

export type IBannerProps = {
  img: string
  alt: string
  title: string
}

export const Banner = ({ img, alt, title }: IBannerProps) => (
  <div className={styles.wrapper}>
    <Image
      className={styles.image}
      src={img}
      alt={alt}
      layout={'fill'}
      objectFit={'cover'}
    />
    <h1 className={styles.title}>{title}</h1>
  </div>
)
