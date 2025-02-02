"use server"

import { saltAndHashPassword } from '@/utils/password'
import { formatErrors } from '@/utils/errors'
import { credentialSignIn } from '@/actions/auth/signIn'

export async function credentialSignUp({ firstName, lastName, email, password }) {
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (user) {
      throw new Error("Email already taken")
    }

    const passwordHash = await saltAndHashPassword(password)
    await prisma.user.create({
      data: {
        email,
        lastName,
        firstName,
        passwordHash,
      },
    })

    return credentialSignIn({ email, password })
  } catch (error) {
    return formatErrors(error)
  }
}
