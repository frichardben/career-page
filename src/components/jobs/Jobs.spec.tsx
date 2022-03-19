import { render, screen } from '@testing-library/react'
import { IJobsProps, Jobs } from './Jobs'

describe('Jobs', () => {
  let props: IJobsProps

  beforeEach(() => {
    props = {
      title: 'React Native',
      link: 'vagas.com',
      location: 'Curitiba'
    }
  })

  it('should render a function', () => {
    expect(typeof Jobs).toBe('function')
  })

  it('should be render without crashing', () => {
    const { container } = render(<Jobs {...props} />)
    expect(container).toBeInTheDocument()
  })

  it('should be render parameters', () => {

    render(<Jobs {...props}/>)

    const title = screen.getByRole('heading', {name: 'React Native'})
    expect(title).toBeDefined()

    const location = screen.getByText('Curitiba')
    expect(location).toBeDefined()
  })
})
