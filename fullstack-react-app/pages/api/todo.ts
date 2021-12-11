import { getSession } from "next-auth/react"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { Session } from "next-auth"
import { UserSession } from "./auth/[...nextauth]"

const prisma = new PrismaClient()

// POST /api/todo -> create todo
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed")
    return
  }

  const session: Session | null = await getSession({ req })

  if (!session) {
    res.status(401).send("Unauthorized")
    return
  }

  if (req.method === "POST") {
    const { title } = req.body

    if (!title) {
      res.status(400).send("Bad Request")
      return
    }

    const userSession: UserSession = session as UserSession
    const todo = await prisma.todo.create({
      data: {
        title,
        userId: userSession.userId,
        isCompleted: false,
      },
    })

    return res.json(todo)
  }
}

export default handler
