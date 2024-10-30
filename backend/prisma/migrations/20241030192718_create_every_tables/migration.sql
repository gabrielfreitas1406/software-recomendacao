-- CreateTable
CREATE TABLE `Conceito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `descricao` VARCHAR(600) NOT NULL,
    `IdPai` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConceitoRecurso` (
    `idConceito` INTEGER NOT NULL,
    `idRecurso` INTEGER NOT NULL,

    PRIMARY KEY (`idConceito`, `idRecurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ferramentas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(80) NOT NULL,
    `descricao` VARCHAR(160) NOT NULL,
    `link` VARCHAR(160) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recurso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(80) NOT NULL,
    `descricao` VARCHAR(300) NOT NULL,
    `idFerramenta` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Conceito` ADD CONSTRAINT `Conceito_IdPai_fkey` FOREIGN KEY (`IdPai`) REFERENCES `Conceito`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConceitoRecurso` ADD CONSTRAINT `ConceitoRecurso_idConceito_fkey` FOREIGN KEY (`idConceito`) REFERENCES `Conceito`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConceitoRecurso` ADD CONSTRAINT `ConceitoRecurso_idRecurso_fkey` FOREIGN KEY (`idRecurso`) REFERENCES `Recurso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recurso` ADD CONSTRAINT `Recurso_idFerramenta_fkey` FOREIGN KEY (`idFerramenta`) REFERENCES `Ferramentas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
