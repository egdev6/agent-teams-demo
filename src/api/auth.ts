export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: { id: string; email: string }
}

export interface ApiError {
  error: string
  code: number
}

/** POST /api/auth/login */
export async function loginHandler(body: LoginRequest): Promise<LoginResponse | ApiError> {
  const { email, password } = body

  if (!email || !password) {
    return { error: 'Email and password are required', code: 400 }
  }

  // TODO: validate credentials against database
  // Stub: accept any non-empty credentials for demo purposes
  return {
    token: `stub-token-${Date.now()}`,
    user: { id: '1', email },
  }
}

/** POST /api/auth/logout */
export async function logoutHandler(): Promise<{ ok: boolean }> {
  // TODO: invalidate token in session store
  return { ok: true }
}
