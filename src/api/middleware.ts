export type ValidationRule = {
  required?: boolean
  type?: 'string' | 'number' | 'email'
  minLength?: number
}

export type Schema = Record<string, ValidationRule>

export interface ValidationResult {
  valid: boolean
  errors: string[]
}

/** Validates a request body against a schema */
export function validateBody(body: Record<string, unknown>, schema: Schema): ValidationResult {
  const errors: string[] = []

  for (const [field, rules] of Object.entries(schema)) {
    const value = body[field]

    if (rules.required && (value === undefined || value === null || value === '')) {
      errors.push(`${field} is required`)
      continue
    }

    if (value !== undefined && rules.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (typeof value !== 'string' || !emailRegex.test(value)) {
        errors.push(`${field} must be a valid email`)
      }
    }

    if (value !== undefined && rules.minLength && typeof value === 'string') {
      if (value.length < rules.minLength) {
        errors.push(`${field} must be at least ${rules.minLength} characters`)
      }
    }
  }

  return { valid: errors.length === 0, errors }
}
