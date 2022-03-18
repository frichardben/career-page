import styles from '../../styles/Typography.module.scss'

export interface ITypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  weight?: 'light' | 'regular' | 'medium'
  color: 'white' | 'black' | 'gray' | 'cyan' | 'orange'
  children?: React.ReactNode
}

export type Variant = {
  H1: 'h1'
  H2: 'h2'
  H3: 'h3'
  H4: 'h4'
  H5: 'h5'
  H6: 'h6'
  P: 'p'
}

export const Typography = ({ variant, color, children }: ITypographyProps) => {
  const Component = `${variant}` as keyof JSX.IntrinsicElements
  //const Component = React.createElement(`${variant}`) as keyof JSX.IntrinsicElements
  return (
    <>
      <Component
        className={`${styles[`typography-${variant}`]} ${
          styles[`color-${color}`]
        }`}
      >
        {children}
      </Component>
    </>
  )
}
