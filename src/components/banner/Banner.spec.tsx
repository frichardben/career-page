import { Banner } from './Banner'
import { render } from '@testing-library/react'
import mock from './Banner.mock'

describe('Banner', () => {
  it('should render a function', () => {
    expect(typeof Banner).toBe('function')
  })

  it('should be render component', () => {
    const { container } = render(<Banner {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
