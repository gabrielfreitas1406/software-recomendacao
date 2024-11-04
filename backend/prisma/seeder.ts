import { PrismaClient } from "@prisma/client";
import { conceitoSeeder } from "./seeders/conceitoSeeder";
import { conceitoRecursoSeeder } from "./seeders/conceitoRecursoSeeder";
import { ferramentasSeeder } from "./seeders/ferramentasSeeder";
import { recursoSeeder } from "./seeders/recursoSeeder";
import { QuestaoSeeder } from "./seeders/questaoRespostaSeeder";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log("Seeder!");

  await conceitoSeeder();
  await ferramentasSeeder();
  await recursoSeeder();

  await conceitoRecursoSeeder();
  await QuestaoSeeder();
}

main()
  .catch((e) => {
    console.error(e);
    //process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
