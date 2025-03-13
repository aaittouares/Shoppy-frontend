import { cookies } from 'next/headers'
import { AUTHENTICATION_COOKIE } from './auth-cookie'

export default async function authenticated() {
  return (await cookies()).has(AUTHENTICATION_COOKIE)
}
