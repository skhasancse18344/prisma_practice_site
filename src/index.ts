import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();
const port = process.env.PORT || 3003;

async function main() {
  await prisma.$connect();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  app.get("/", (req, res) => {
    res.send("Hello from first ever prisma server!");
  });
}
main();
