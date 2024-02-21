import z from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function registerProfile(app: FastifyInstance) {
  app.post('/profile', async (req, reply) => {
    const VALUES = ["ADMIN", "USER", "GUEST"] as const;

    const registerProfileBody = z.object({
      name: z.string().min(1).max(255),
      lastName: z.string().max(255).optional(),
      phoneNumber: z.string().min(1).max(20),
      email: z.string().min(1).max(255),
      dateBirth: z.string().transform((value) => (value ? new Date(value) : null)).optional(),
      accessLevel: z.enum(VALUES).default("GUEST"),
      loginUsersId: z.string().uuid().nullable()
    });

    try {
      const {
        accessLevel,
        name,
        lastName,
        phoneNumber,
        email,
        dateBirth,
        loginUsersId
      } = registerProfileBody.parse(req.body);

      const profileUserInsert = await prisma.userProfile.create({
        data: {
          name,
          lastName,
          phoneNumber,
          email,
          dateBirth,
          accessLevel,
          loginUsersId,
        }
      });

      return reply.status(201).send({
        profileId: profileUserInsert.id,
      });
    } catch (error) {
      reply.status(400).send({ error: "Bad Request" });
    }
  });
}
