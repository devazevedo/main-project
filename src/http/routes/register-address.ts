import z from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function registerAddress(app: FastifyInstance) {
  app.post('/address/:userProfileId', async (req, reply) => {

    const registerAddressBody = z.object({
      zipCode: z.string().min(1).max(20),
      street: z.string().min(1).max(255),
      number: z.number(),
      complement: z.string().max(255).optional(),
      observation: z.string().max(255).optional(),
      neighborhood: z.string().min(1).max(255),
      city: z.string().min(1).max(255),
      state: z.string().min(1).max(2),
    });

    const registerAddressParams = z.object({
      userProfileId: z.string().min(1).max(255).uuid()
    })

    try {
      const {
        zipCode,
        street,
        number,
        complement,
        observation,
        neighborhood,
        city,
        state,
      } = registerAddressBody.parse(req.body);

      const {
        userProfileId,
      } = registerAddressParams.parse(req.params)

      const addressUserInsert = await prisma.addressUser.create({
        data: {
          zipCode,
          street,
          number,
          complement,
          observation,
          neighborhood,
          city,
          state,
          userProfileId
        }
      });

      return reply.status(201).send({
        addressId: addressUserInsert.id,
      });
    } catch (error) {
      reply.status(400).send({ error: "Bad Request" });
    }
  });
}
