import { ITypographyProps } from '../../types'
import styles from './Typography.module.scss'

export const Typography = ({
  variant,
  children,
  className
}: ITypographyProps) => {
  const Component = `${variant}` as keyof JSX.IntrinsicElements

  return (
    <>
      <Component className={`${styles[`typography-${variant}`]} ${className}`}>
        {children}
      </Component>
    </>
  )
}
