export type IBannerProps = {
  img: string
  alt: string
  title: string
}

export interface ICardProps {
  imageUrl: string
  alt: string
  title: string
  description: string
}

export interface IDividerProps {
  className?: string
}

export interface IJobsProps {
  link: string
  title: string
  location?: string
}

export interface IMediaHorizontalProps {
  imgUrl: string
  alt: string
  title: string
  subtitle: string
  description: string
}

export interface ITypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children?: React.ReactNode
  className?: string
}

type Localizacao = {
  bairro: string
  cidade: string
  pais: string
}

type InfoJobs = {
  cargo: string
  ativa: boolean
  link: string
  localizacao?: Localizacao
}

export interface IHomeProps {
  allJobs: InfoJobs[]
}
