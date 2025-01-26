"use server"

import { signOut as logout } from '@/lib/auth'

export async function signOut() {
  return logout()
}
