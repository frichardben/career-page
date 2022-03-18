import { Banner } from './Banner'
import { render, screen } from '@testing-library/react'
import mock from './Banner.mock'

describe('Banner', () => {
  it('should render a function', () => {
    expect(typeof Banner).toBe('function')
  })

  it('should be render without crashing', () => {
    const { container } = render(<Banner {...mock} />)

    expect(container).toBeInTheDocument()
  })

  it('should render a title', () => {
    render(<Banner {...mock} />)
    const headingElement = screen.getByRole('heading', { name: 'Vagas' })
    expect(headingElement).toBeInTheDocument()
  })

  it('should be render imageAlt', () => {
    render(<Banner {...mock} />)
    const imgAlt = screen.getByAltText(/photo/)
    expect(imgAlt).toBeInTheDocument()
  })
})
