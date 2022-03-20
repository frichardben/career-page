import { render, screen } from '@testing-library/react'
import { IMediaHorizontalProps, MediaHorizontal } from './MediaHorizontal'

describe('MediaHorizontal', () => {
  let props: IMediaHorizontalProps

  beforeEach(() => {
    props = {
      imgUrl: '/img/descontracao.png',
      alt: 'Descontração',
      title: 'Ambiente',
      subtitle: 'Descontraido',
      description: 'Lorem testes'
    }
  })

  it('should render a function', () => {
    expect(typeof MediaHorizontal).toBe('function')
  })

  it('should be render without crashing', () => {
    const { container } = render(<MediaHorizontal {...props} />)
    expect(container).toBeInTheDocument()
  })

  it('should be render parameters', () => {
    render(<MediaHorizontal {...props}/>)
    
    const imgAlt = screen.getByAltText('Descontração')
    expect(imgAlt).toBeDefined()

    const title = screen.getByRole('heading', {name: 'Ambiente'})
    expect(title).toBeDefined()

    const subtitle = screen.getByRole('heading', {name: 'Descontraido'})
    expect(subtitle).toBeDefined()

    const description = screen.getByText('Lorem testes')
    expect(description).toBeDefined()
  })
})
