import { Typography, ITypographyProps } from './Typography'
import { render, screen } from '@testing-library/react'

describe('Typography', () => {
  let props: ITypographyProps

  beforeEach(() => {
    props = {
      variant: 'h3',
      children: 'Teste 1'
    }
  })

  it('should render a function', () => {
    expect(typeof Typography)
  })

  it('should be render without crashing', () => {
    const { container } = render(<Typography {...props} />)
    expect(container).toBeInTheDocument()

    expect(container).toHaveTextContent('Teste 1')
  })

  it('should be render a text', () => {
    render(<Typography {...props} />)
    const text = screen.getByText('Teste 1')

    expect(text).toBeInTheDocument()
  })
})
