import type { DefaultSession, User } from 'next-auth'
import type { DefaultJWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: UserId
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User & {
      id: UserId
    }
  }
}
