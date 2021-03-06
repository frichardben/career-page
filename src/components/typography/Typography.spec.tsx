import { Typography } from './Typography'
import { render, screen } from '@testing-library/react'
import { ITypographyProps } from '../../types'

describe('Typography', () => {
  let props: ITypographyProps

  beforeEach(() => {
    props = {
      variant: 'h3',
      children: 'Teste 1'
    }
  })

  it('should render a function', () => {
    expect(typeof Typography).toBe('function')
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
