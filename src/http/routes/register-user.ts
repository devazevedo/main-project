import z from "zod";
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function registerUser(app: FastifyInstance) {
  app.post('/user', async (req, reply) => {

    const registerUserBody = z.object({
      user: z.string().min(6).max(255),
      password: z.string().min(8).max(255),
    });

    try {
      const {
        user,
        password,
      } = registerUserBody.parse(req.body);

      const hashedPassword = await bcrypt.hash(password, 10);

      const userInsert = await prisma.loginUsers.create({
        data: {
          user,
          password: hashedPassword,
        }
      });

      return reply.status(201).send({
        userId: userInsert.id,
      });
    } catch (error) {
      reply.status(400).send({ error: "Bad Request" });
    }
  });
}
