interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    padding: '0.5rem 1.25rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.875rem',
    transition: 'opacity 0.15s',
  },
  primary: { background: '#6d28d9', color: '#fff' },
  secondary: { background: '#e5e7eb', color: '#111827' },
}

export function Button({ variant = 'primary', children, onClick, disabled }: ButtonProps) {
  return (
    <button
      style={{ ...styles.base, ...styles[variant], opacity: disabled ? 0.5 : 1 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
