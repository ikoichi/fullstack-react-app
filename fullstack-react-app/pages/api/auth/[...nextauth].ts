import NextAuth, { Session, User } from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { JWT } from "next-auth/jwt"

const prisma = new PrismaClient()

type SessionArg = {
  session: Session
  user: User
  token: JWT
}

export type UserSession = {
  userId: string
} & Session

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    session: async ({ session, user }: SessionArg) => {
      session.userId = user.id
      return Promise.resolve(session as UserSession)
    },
  },
})
