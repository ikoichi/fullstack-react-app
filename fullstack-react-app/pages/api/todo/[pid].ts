import { getSession } from "next-auth/react"
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { Session } from "next-auth"
import { UserSession } from "../auth/[...nextauth]"

const prisma = new PrismaClient()

// PUT /api/todo/:id -> update todo
// DELETE /api/todo/:id -> delete todo
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!["PUT", "DELETE"].includes(req.method || "")) {
    res.status(405).send("Method Not Allowed")
    return
  }

  const session: Session | null = await getSession({ req })

  if (!session) {
    res.status(401).send("Unauthorized")
    return
  }

  if (req.method === "PUT") {
    // PUT /api/todo/:id -> update todo
    const { pid } = req.query
    const { title } = req.body

    const id: string = pid.toString()
    const todo = await prisma.todo.update({
      where: { id },
      data: { title },
    })

    return res.json(todo)
  }

  if (req.method === "DELETE") {
    // DELETE /api/todo/:id -> delete todo

    return res.json({})
  }
}

export default handler
