import styles from './Typography.module.scss'

export interface ITypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children?: React.ReactNode
  className?: string
}

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
