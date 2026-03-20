export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

const STUB_USERS: User[] = [
  { id: '1', email: 'alice@example.com', name: 'Alice', createdAt: '2024-01-01' },
  { id: '2', email: 'bob@example.com', name: 'Bob', createdAt: '2024-02-15' },
]

/** GET /api/users */
export async function listUsersHandler(): Promise<User[]> {
  return STUB_USERS
}

/** GET /api/users/:id */
export async function getUserHandler(id: string): Promise<User | null> {
  return STUB_USERS.find((u) => u.id === id) ?? null
}
