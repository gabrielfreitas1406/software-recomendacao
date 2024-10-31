import { PrismaClient } from "@prisma/client";
import { conceitoSeeder } from "./seeders/conceitoSeeder";
import { conceitoRecursoSeeder } from "./seeders/conceitoRecursoSeeder";
import { ferramentasSeeder } from "./seeders/ferramentasSeeder";
import { recursoSeeder } from "./seeders/recursoSeeder";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await conceitoSeeder();
  await conceitoRecursoSeeder();
  await ferramentasSeeder();
  await recursoSeeder();
}

main()
  .catch((e) => {
    console.error(e);
    //process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
