import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { signInSchema } from "@/schemas/auth"
import {comparePasswords, saltAndHashPassword} from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials)

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
          throw new Error("Invalid credentials")
        }

        const isValid = comparePasswords(password, user.passwordHash)
        if (!isValid) {
          throw new Error("Invalid credentials")
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: '/account/sign_in',
    newUser: '/account/sign_up'
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
})
