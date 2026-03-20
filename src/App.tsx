import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Input } from './ui/Input'
import { LoginForm } from './ui/LoginForm'

export default function App() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '640px', margin: '0 auto' }}>
      <h1>Agent Teams Demo</h1>

      <section>
        <h2>Buttons</h2>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Card</h2>
        <Card title="Example Card">Card content goes here.</Card>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Input</h2>
        <Input label="Email" type="email" placeholder="you@example.com" />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Login Form</h2>
        <LoginForm onSubmit={(data) => console.log('Login:', data)} />
      </section>
    </main>
  )
}
