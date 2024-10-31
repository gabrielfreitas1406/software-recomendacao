import { PrismaClient } from "@prisma/client";
import { conceitoSeeder } from "./seeders/conceitoSeeder";
import { conceitoRecursoSeeder } from "./seeders/conceitoRecursoSeeder";
import { ferramentasSeeder } from "./seeders/ferramentasSeeder";
import { recursoSeeder } from "./seeders/recursoSeeder";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log("Seeder!");

  await conceitoSeeder();
  await ferramentasSeeder();
  await recursoSeeder();

  await conceitoRecursoSeeder();
}

main()
  .catch((e) => {
    console.error(e);
    //process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
