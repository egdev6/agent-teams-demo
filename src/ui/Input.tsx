interface InputProps {
  label: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export function Input({ label, type = 'text', placeholder, value, onChange }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          padding: '0.5rem 0.75rem',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          fontSize: '0.875rem',
        }}
      />
    </div>
  )
}
