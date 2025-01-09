import { PrismaClient } from "@prisma/client"

const globalForPrisma = global

const isProduction = process.env.NODE_ENV === 'production'

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: isProduction ? ['error', 'warn'] : ['query', 'info', 'warn', 'error'],
  errorFormat: isProduction ? 'minimal' : 'pretty',
})

if (!isProduction) {
  globalForPrisma.prisma = prisma
}
