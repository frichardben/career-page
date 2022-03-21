import { render, screen } from '@testing-library/react'
import { ICardProps } from '../../types'
import { Card } from './Card'

describe('Card', () => {
  let props: ICardProps

  beforeEach(() => {
    props = {
      imageUrl: '/img/descontracao.png',
      alt: 'Descontração',
      title: 'Ambiente',
      description: 'Lorem testes'
    }
  })

  it('should be render a function', () => {
    expect(typeof Card).toBe('function')
  })

  it('should be render without crashing', () => {
    const { container } = render(<Card {...props} />)

    expect(container).toBeInTheDocument()
  })

  it('should be render parameters', () => {
    render(<Card {...props} />)
    const imgAlt = screen.getByAltText('Descontração')
    expect(imgAlt).toBeDefined()

    const title = screen.getByRole('heading', { name: 'Ambiente' })
    expect(title).toBeDefined()

    const description = screen.getByText('Lorem testes')
    expect(description).toBeDefined()
  })
})
