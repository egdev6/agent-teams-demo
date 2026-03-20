import { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

interface LoginData {
  email: string
  password: string
}

interface LoginFormProps {
  onSubmit: (data: LoginData) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={setEmail}
      />
      <Input
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={setPassword}
      />
      <Button variant="primary" disabled={!email || !password}>
        Iniciar sesión
      </Button>
    </form>
  )
}
