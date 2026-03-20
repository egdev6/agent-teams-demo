import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders the title', () => {
    render(<Card title="My Card">Content</Card>)
    expect(screen.getByText('My Card')).toBeInTheDocument()
  })

  it('renders children content', () => {
    render(<Card title="Card">Hello world</Card>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
})
