"use server"

import { signIn } from '@/lib/auth'

export async function credentialSignIn({ email, password }) {
  return signIn("credentials", {
    email,
    password,
    redirect: false
  })
}
