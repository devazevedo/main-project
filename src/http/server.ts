import fastify from "fastify";
import { registerUser } from "./routes/register-user"
import { registerProfile } from "./routes/register-profile";
import { registerAddress } from "./routes/register-address";

const app = fastify()

app.register(registerUser)
app.register(registerProfile)
app.register(registerAddress)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
})