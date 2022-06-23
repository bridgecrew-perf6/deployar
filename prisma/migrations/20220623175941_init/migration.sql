-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Document` INTEGER NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Surname` VARCHAR(191) NOT NULL,
    `D_Birth` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
