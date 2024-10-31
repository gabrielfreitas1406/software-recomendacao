-- DropForeignKey
ALTER TABLE `Conceito` DROP FOREIGN KEY `Conceito_IdPai_fkey`;

-- AlterTable
ALTER TABLE `Conceito` MODIFY `IdPai` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Conceito` ADD CONSTRAINT `Conceito_IdPai_fkey` FOREIGN KEY (`IdPai`) REFERENCES `Conceito`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
